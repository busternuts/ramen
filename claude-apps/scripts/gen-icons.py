#!/usr/bin/env python3
"""Generate placeholder PWA icons. Stdlib only.

Produces a soft radial gradient (accent -> dark) for each required size.
Replace these with real icons once the brand exists.
"""

import struct
import zlib
from pathlib import Path


def make_png(size, path):
    bg = (10, 10, 10, 255)        # #0a0a0a
    accent = (10, 132, 255, 255)  # #0a84ff (iOS blue)

    raw = bytearray()
    cx, cy = size / 2, size / 2
    max_dist = size / 2

    for y in range(size):
        raw.append(0)  # PNG filter byte: None
        for x in range(size):
            dx = x - cx
            dy = y - cy
            dist = (dx * dx + dy * dy) ** 0.5
            t = min(1.0, dist / max_dist)
            # smoothstep for nicer falloff
            t = t * t * (3 - 2 * t)
            r = int(accent[0] * (1 - t) + bg[0] * t)
            g = int(accent[1] * (1 - t) + bg[1] * t)
            b = int(accent[2] * (1 - t) + bg[2] * t)
            raw.extend([r, g, b, 255])

    def chunk(tag, data):
        out = struct.pack('>I', len(data)) + tag + data
        crc = zlib.crc32(tag + data)
        return out + struct.pack('>I', crc)

    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)
    idat = zlib.compress(bytes(raw), level=9)
    png = sig + chunk(b'IHDR', ihdr) + chunk(b'IDAT', idat) + chunk(b'IEND', b'')
    Path(path).write_bytes(png)


def main():
    root = Path(__file__).resolve().parent.parent
    icon_dir = root / 'public' / 'icons'
    icon_dir.mkdir(parents=True, exist_ok=True)

    targets = [
        (192, icon_dir / 'icon-192.png'),
        (512, icon_dir / 'icon-512.png'),
        (512, icon_dir / 'icon-512-maskable.png'),
        (180, root / 'public' / 'apple-touch-icon.png'),
    ]

    for size, path in targets:
        make_png(size, path)
        print(f'  {path.relative_to(root)}  {size}x{size}')


if __name__ == '__main__':
    main()
