from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / ".design-ref" / "page-1.png"
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

im = Image.open(SRC).convert("RGB")
arr = np.array(im)
_, W, _ = arr.shape


def save_webp(image: Image.Image, name: str, quality: int = 82) -> None:
    path = OUT / name
    image.save(path, "WEBP", quality=quality, method=6)
    print("wrote", path, image.size)


def inpaint_whites(
    image: Image.Image,
    extra_mask: np.ndarray | None = None,
    threshold: int = 205,
    blur: int = 36,
    dilate: int = 9,
) -> Image.Image:
    a = np.array(image)
    r, g, b = a[:, :, 0], a[:, :, 1], a[:, :, 2]
    white = (r >= threshold) & (g >= threshold) & (b >= threshold)
    if extra_mask is not None:
        white |= extra_mask
    mask = Image.fromarray((white * 255).astype(np.uint8))
    if dilate >= 3:
        if dilate % 2 == 0:
            dilate += 1
        mask = mask.filter(ImageFilter.MaxFilter(dilate))
    blur_im = image.filter(ImageFilter.GaussianBlur(blur))
    return Image.composite(blur_im, image, mask)


rng = np.random.default_rng(42)
grain = rng.integers(90, 165, (256, 256), dtype=np.uint8)
Image.fromarray(grain, mode="L").save(OUT / "grain.png")
print("wrote grain")

paper = im.crop((900, 1020, 1140, 1160)).resize((1200, 800), Image.Resampling.BICUBIC)
paper = ImageEnhance.Contrast(paper).enhance(1.15)
paper = ImageEnhance.Color(paper).enhance(0.3)
save_webp(paper, "paper-texture.webp", 70)

footer_tex = im.crop((700, 5380, 1100, 5520)).resize((1400, 700), Image.Resampling.BICUBIC)
save_webp(footer_tex, "footer-texture.webp", 70)

hero = im.crop((0, 0, W, 656))
h_a = np.array(hero)
hh, hw, _ = h_a.shape
r, g, b = h_a[:, :, 0], h_a[:, :, 1], h_a[:, :, 2]
white = (r > 198) & (g > 198) & (b > 198)
extra = np.zeros((hh, hw), dtype=bool)
extra[:100] |= white[:100]
extra[int(hh * 0.22) : int(hh * 0.88), int(hw * 0.08) : int(hw * 0.92)] |= white[
    int(hh * 0.22) : int(hh * 0.88), int(hw * 0.08) : int(hw * 0.92)
]
hero_clean = inpaint_whites(hero, extra_mask=extra, threshold=199, blur=42, dilate=11)
hero_clean = inpaint_whites(hero_clean, threshold=210, blur=24, dilate=5)
save_webp(hero_clean, "hero.webp", 86)

save_webp(im.crop((0, 716, 620, 996)), "vision-projector.webp", 86)

j = im.crop((286, 1436, 540, 1628))
save_webp(j, "journey-01.webp", 84)
save_webp(
    j.crop((20, 10, j.width - 8, j.height - 8)).resize(j.size, Image.Resampling.LANCZOS),
    "journey-02.webp",
    84,
)
save_webp(j.transpose(Image.Transpose.FLIP_LEFT_RIGHT), "journey-03.webp", 84)

for name, box in {
    "stage-script.webp": (208, 2076, 388, 2244),
    "stage-nearing.webp": (396, 2076, 578, 2244),
    "stage-festival.webp": (586, 2076, 766, 2244),
    "stage-circulation.webp": (776, 2076, 956, 2244),
}.items():
    save_webp(im.crop(box), name, 84)

save_webp(im.crop((0, 3128, W, 3412)), "pathway-set.webp", 86)

path_photo = inpaint_whites(im.crop((220, 4136, 600, 4388)), threshold=200, blur=28, dilate=9)
save_webp(path_photo, "partnership-pathway.webp", 84)

creative = inpaint_whites(im.crop((608, 4136, 948, 4388)), threshold=200, blur=28, dilate=9)
save_webp(creative, "partnership-creative.webp", 84)

contact = im.crop((0, 4768, W, 5276))
c_a = np.array(contact)
ch, cw, _ = c_a.shape
r, g, b = c_a[:, :, 0], c_a[:, :, 1], c_a[:, :, 2]
white = (r > 190) & (g > 190) & (b > 190)
extra = np.zeros((ch, cw), dtype=bool)
extra[:120] |= white[:120]
extra[int(ch * 0.18) :, : int(cw * 0.62)] |= white[int(ch * 0.18) :, : int(cw * 0.62)]
contact_clean = inpaint_whites(contact, extra_mask=extra, threshold=188, blur=30, dilate=9)
save_webp(contact_clean, "contact-set.webp", 86)

print("done")
