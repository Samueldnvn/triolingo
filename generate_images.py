from PIL import Image, ImageDraw, ImageFont
import os

# Create output directory
output_dir = "/home/samueldnvn4/.openclaw/workspace/stick_images"
os.makedirs(output_dir, exist_ok=True)

# Image dimensions
width, height = 1280, 720

def draw_stick_person(draw, x, y, scale=1.0, color='black'):
    """Draw a stick figure at position (x, y)"""
    s = scale
    line_width = max(2, int(4 * s))

    # Head
    head_radius = int(15 * s)
    draw.ellipse([x - head_radius, y - head_radius * 3, x + head_radius, y - head_radius],
                 outline=color, width=line_width)

    # Body
    draw.line([x, y - head_radius, x, y + head_radius * 6], fill=color, width=line_width)

    # Arms
    draw.line([x - head_radius * 2, y, x + head_radius * 2, y], fill=color, width=line_width)

    # Legs
    draw.line([x, y + head_radius * 2, x - head_radius * 2, y + head_radius * 7], fill=color, width=line_width)
    draw.line([x, y + head_radius * 2, x + head_radius * 2, y + head_radius * 7], fill=color, width=line_width)

def create_image001():
    """Starving peasant family - gray background"""
    img = Image.new('RGB', (width, height), color='#808080')
    draw = ImageDraw.Draw(img)

    # Ground
    draw.line([0, 600, width, 600], fill='#666666', width=4)

    # Family - father (left), mother (middle), child (right)
    draw_stick_person(draw, 400, 580, scale=1.1)
    draw_stick_person(draw, 640, 580, scale=1.0)  # mother slightly smaller
    draw_stick_person(draw, 880, 580, scale=0.7)  # child

    # Add text
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    draw.text((width//2, 50), "STARVING PEASANTS", fill='black', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image001.png"))
    print("Created image001.png")

def create_image002():
    """Three estates - brown background"""
    img = Image.new('RGB', (width, height), color='#8B4513')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 30)
    except:
        font = ImageFont.load_default()

    # Three tiers
    tier1_y = 150
    tier2_y = 300
    tier3_y = 450

    # First Estate (Clergy) - top
    draw.rectangle([350, tier1_y - 50, 930, tier1_y + 50], fill='#FFD700', outline='black', width=4)
    draw.text((640, tier1_y), "1st Estate: Clergy (1%)", fill='black', font=font, anchor='mm')
    draw_stick_person(draw, 500, tier1_y + 80, scale=0.8, color='white')
    draw_stick_person(draw, 780, tier1_y + 80, scale=0.8, color='white')

    # Second Estate (Nobility) - middle
    draw.rectangle([250, tier2_y - 50, 1030, tier2_y + 50], fill='#C0C0C0', outline='black', width=4)
    draw.text((640, tier2_y), "2nd Estate: Nobility (2%)", fill='black', font=font, anchor='mm')
    draw_stick_person(draw, 400, tier2_y + 80, scale=0.8, color='white')
    draw_stick_person(draw, 640, tier2_y + 80, scale=0.8, color='white')
    draw_stick_person(draw, 880, tier2_y + 80, scale=0.8, color='white')

    # Third Estate (Everyone else) - bottom
    draw.rectangle([100, tier3_y - 50, 1180, tier3_y + 50], fill='#A0522D', outline='black', width=4)
    draw.text((640, tier3_y), "3rd Estate: Everyone Else (97%)", fill='black', font=font, anchor='mm')
    draw_stick_person(draw, 200, tier3_y + 80, scale=0.6, color='white')
    draw_stick_person(draw, 350, tier3_y + 80, scale=0.6, color='white')
    draw_stick_person(draw, 500, tier3_y + 80, scale=0.6, color='white')
    draw_stick_person(draw, 650, tier3_y + 80, scale=0.6, color='white')
    draw_stick_person(draw, 800, tier3_y + 80, scale=0.6, color='white')
    draw_stick_person(draw, 950, tier3_y + 80, scale=0.6, color='white')
    draw_stick_person(draw, 1100, tier3_y + 80, scale=0.6, color='white')

    img.save(os.path.join(output_dir, "image002.png"))
    print("Created image002.png")

def create_image003():
    """King Louis XVI spending money - gold background"""
    img = Image.new('RGB', (width, height), color='#FFD700')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # King figure with crown
    draw_stick_person(draw, 600, 500, scale=1.5)

    # Crown
    draw.polygon([
        [600, 320], [560, 350], [570, 280], [600, 260], [630, 280], [640, 350]
    ], fill='yellow', outline='black', width=3)

    # Crown jewels
    draw.ellipse([590, 290, 600, 300], fill='red', outline='black', width=2)
    draw.ellipse([605, 300, 615, 310], fill='blue', outline='black', width=2)

    # Money bag
    draw.ellipse([850, 400, 1050, 520], fill='#228B22', outline='black', width=4)
    draw.text((950, 460), "$$$", fill='gold', font=font, anchor='mm')

    # Money flying out
    draw.rectangle([800, 350, 820, 370], fill='#FFD700', outline='black', width=2)
    draw.rectangle([750, 320, 770, 340], fill='#FFD700', outline='black', width=2)
    draw.rectangle([700, 280, 720, 300], fill='#FFD700', outline='black', width=2)

    draw.text((640, 80), "KING LOUIS XVI", fill='black', font=font, anchor='mm')
    draw.text((640, 130), "SPENDING IT ALL", fill='black', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image003.png"))
    print("Created image003.png")

def create_image004():
    """Angry peasants with pitchforks - brown/red background"""
    img = Image.new('RGB', (width, height), color='#8B0000')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # Ground
    draw.line([0, 580, width, 580], fill='#654321', width=4)

    # Angry crowd
    x_positions = [200, 350, 500, 740, 890, 1040]
    for i, x in enumerate(x_positions):
        scale = 0.9 + (i % 2) * 0.1
        draw_stick_person(draw, x, 560, scale=scale)

    # Pitchforks (raised arms)
    for x in [350, 740, 1040]:
        draw.line([x - 40, 540, x - 20, 380], fill='#8B4513', width=6)  # handle
        draw.line([x - 40, 380, x, 360], fill='silver', width=4)  # prong 1
        draw.line([x - 20, 380, x + 20, 360], fill='silver', width=4)  # prong 2
        draw.line([x, 380, x + 40, 360], fill='silver', width=4)  # prong 3

    draw.text((640, 80), "ANGRY PEASANTS", fill='white', font=font, anchor='mm')
    draw.text((640, 130),"THEY'VE HAD ENOUGH", fill='white', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image004.png"))
    print("Created image004.png")

def create_image005():
    """Tennis Court Oath - green background"""
    img = Image.new('RGB', (width, height), color='#228B22')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 35)
    except:
        font = ImageFont.load_default()

    # Indoor court floor
    draw.rectangle([100, 250, 1180, 680], fill='#90EE90', outline='white', width=4)

    # Tennis net
    draw.line([640, 250, 640, 500], fill='white', width=3)

    # People on left side
    for i, x in enumerate([200, 300, 400, 500]):
        draw_stick_person(draw, x, 620, scale=0.7)

    # People on right side
    for i, x in enumerate([780, 880, 980, 1080]):
        draw_stick_person(draw, x, 620, scale=0.7)

    # Document in center
    draw.rectangle([580, 380, 700, 440], fill='white', outline='black', width=3)
    for i in range(3):
        draw.line([595, 400 + i*10, 685, 400 + i*10], fill='black', width=2)

    draw.text((640, 80), "TENNIS COURT OATH", fill='white', font=font, anchor='mm')
    draw.text((640, 130), "WE WILL NOT DISBAND!", fill='white', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image005.png"))
    print("Created image005.png")

def create_image006():
    """Storming Bastille - dark red background"""
    img = Image.new('RGB', (width, height), color='#4B0000')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # Bastille tower
    draw.rectangle([500, 150, 740, 600], fill='#696969', outline='black', width=4)
    draw.rectangle([520, 120, 540, 150], fill='#696969', outline='black', width=4)  # turret

    # Windows
    draw.rectangle([540, 200, 570, 250], fill='black', outline='white', width=2)
    draw.rectangle([650, 200, 680, 250], fill='black', outline='white', width=2)

    # Door (broken)
    draw.rectangle([600, 450, 640, 600], fill='#000000', outline='yellow', width=4)

    # Smashed door piece
    draw.rectangle([100, 520, 200, 560], fill='#696969', outline='black', width=2)

    # Angry crowd at bottom
    ground_y = 650
    for x in [100, 200, 300, 400, 800, 900, 1000, 1100]:
        draw_stick_person(draw, x, ground_y, scale=0.8)

    # Smoke/fire from broken door
    draw.ellipse([580, 420, 660, 480], fill='gray', outline='white', width=2)

    draw.text((640, 60), "STORMING THE BASTILLE!", fill='white', font=font, anchor='mm')
    draw.text((640, 105), "JULY 14, 1789", fill='yellow', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image006.png"))
    print("Created image006.png")

def create_image007():
    """Declaration of Rights - white/blue background"""
    img = Image.new('RGB', (width, height), color='#F8F8FF')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 30)
    except:
        font = ImageFont.load_default()

    # Document/scroll
    draw.rectangle([340, 180, 940, 540], fill='#FFF8DC', outline='black', width=4)

    # Seal in center
    draw.ellipse([550, 320, 570, 340], fill='blue', outline='black', width=2)
    draw.ellipse([610, 320, 630, 340], fill='white', outline='black', width=2)
    draw.ellipse([670, 320, 690, 340], fill='red', outline='black', width=2)

    # Lines of text
    font_small = font
    for i in range(8):
        draw.line([360, 220 + i*40, 920, 220 + i*40], fill='black', width=2)

    draw.text((640, 100), "DECLARATION OF RIGHTS", fill='#000080', font=font, anchor='mm')

    # Liberty, Equality, Fraternity
    draw.text((640, 580), "LIBERTY - EQUALITY - FRATERNITY", fill='#0000CD', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image007.png"))
    print("Created image007.png")

def create_image008():
    """Mob/violence scene - dark background"""
    img = Image.new('RGB', (width, height), color='#1a1a1a')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # Chaotic crowd - different sizes and positions
    positions = [
        (150, 400, 0.8), (280, 440, 0.9), (420, 380, 0.7),
        (560, 420, 1.0), (720, 400, 0.8), (860, 450, 0.9),
        (1000, 390, 0.7), (1140, 430, 0.8), (200, 550, 0.8),
        (800, 580, 0.9), (1100, 560, 0.7)
    ]

    for x, y, scale in positions:
        # Some inverted (fallen) figures
        if (x + y) % 3 == 0:
            # Draw fallen figure horizontally
            draw.line([x - 20, y, x + 20, y], fill='black', width=3)  # body
            draw.ellipse([x - 38, y - 8, x - 22, y + 8], outline='black', width=2)  # head
        else:
            draw_stick_person(draw, x, y, scale=scale, color='black')

    # Torch flames
    for x in [250, 500, 750, 1000]:
        draw.line([x, 500, x, 550], fill='#8B4513', width=4)  # handle
        draw.ellipse([x - 15, 460, x + 15, 500], fill='#FF4500', outline='red', width=2)  # flame

    draw.text((640, 80), "MOB VIOLENCE", fill='red', font=font, anchor='mm')
    draw.text((640, 130), "SEPTEMBER MASSACRES", fill='white', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image008.png"))
    print("Created image008.png")

def create_image009():
    """Guillotine/Robespierre - black/red background"""
    img = Image.new('RGB', (width, height), color='#2F2F2F')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # Guillotine stand
    draw.rectangle([300, 250, 980, 600], fill='#8B4513', outline='black', width=4)

    # Guillotine blade
    draw.polygon([
        [630, 300], [610, 400], [670, 400]
    ], fill='silver', outline='black', width=3)

    # Blade guide rails
    draw.line([550, 280, 550, 500], fill='black', width=3)
    draw.line([730, 280, 730, 500], fill='black', width=3)

    # Blade cord
    draw.line([640, 280, 640, 240], fill='red', width=2)

    # Bascket
    draw.rectangle([560, 520, 720, 580], fill='#4A4A4A', outline='black', width=3)

    # Robespierre watching
    draw_stick_person(draw, 900, 580, scale=1.0, color='black')

    # Blood on ground
    draw.ellipse([580, 620, 700, 640], fill='#8B0000', outline='black', width=2)

    draw.text((640, 60), "REIGN OF TERROR", fill='red', font=font, anchor='mm')
    draw.text((640, 110), "ROBESPIERRE", fill='white', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image009.png"))
    print("Created image009.png")

def create_image010():
    """Robespierre falling - red/dark background"""
    img = Image.new('RGB', (width, height), color='#1a0000')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # Falling Robespierre - horizontal pose
    x, y = 640, 350
    # Head
    draw.ellipse([x + 20, y - 40, x + 50, y - 10], outline='black', width=3)
    # Body
    draw.line([x, y, x + 80, y], fill='black', width=30)
    # Arms (falling motion)
    draw.line([x + 40, y - 50, x + 40, y + 50], fill='black', width=4)
    draw.line([x + 40, y - 50, x + 70, y - 30], fill='black', width=4)
    # Legs (splayed)
    draw.line([x + 80, y, x + 120, y + 60], fill='black', width=4)
    draw.line([x + 80, y, x + 100, y - 30], fill='black', width=4)

    # Guillotine blade above
    draw.polygon([
        [630, 150], [610, 200], [670, 200]
    ], fill='silver', outline='black', width=3)

    # Blood drips
    draw.line([650, 210, 650, 280], fill='#8B0000', width=5)
    draw.line([680, 400, 700, 450], fill='#8B0000', width=8)

    draw.text((640, 600), "FALL OF ROBESPIERRE!", fill='red', font=font, anchor='mm')
    draw.text((640, 650), "HE MEETS THE BLADE", fill='white', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image010.png"))
    print("Created image010.png")

def create_image011():
    """Napoleon appearing - blue/white French colors"""
    img = Image.new('RGB', (width, height), color='#0055A4')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # French flag stripe
    draw.rectangle([0, 0, width // 3, 100], fill='#0055A4')  # Blue
    draw.rectangle([width // 3, 0, 2 * width // 3, 100], fill='white')  # White
    draw.rectangle([2 * width // 3, 0, width, 100], fill='#EF4135')  # Red

    # Napoleon figure with bicorne hat
    draw_stick_person(draw, 640, 500, scale=1.3)

    # Bicorne hat
    draw.polygon([
        [580, 320], [700, 320], [690, 280], [590, 280]
    ], fill='black', outline='white', width=3)

    # Medal/epaulets
    for x in [580, 700]:
        draw.ellipse([x - 8, 330, x + 8, 346], fill='gold', outline='black', width=2)

    # Hand in coat
    # Napoleon's signature pose

    # Eagle symbol
    draw.text((640, 600), "★★ NAPOLEON ★★", fill='gold', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image011.png"))
    print("Created image011.png")

def create_image012():
    """Peaceful ending with changed France - bright colors"""
    img = Image.new('RGB', (width, height), color='#87CEEB')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()

    # Sun
    draw.ellipse([1100, 50, 1220, 170], fill='#FFD700', outline='orange', width=4)

    # Grass ground
    draw.rectangle([0, 550, width, 720], fill='#32CD32')

    # Happy people = freedom from serfdom
    for i, x in enumerate([300, 480, 660, 840, 1020]):
        draw_stick_person(draw, x, 600, scale=0.9)

    # Birds in sky
    for x in [200, 400]:
        draw.line([x, 200, x - 30, 180], fill='black', width=2)
        draw.line([x, 200, x + 30, 180], fill='black', width=2)

    draw.text((640, 80), "A NEW FRANCE", fill='#000080', font=font, anchor='mm')
    draw.text((640, 130), "FREEDOM FROM SERFDOM!", fill='#228B22', font=font, anchor='mm')

    img.save(os.path.join(output_dir, "image012.png"))
    print("Created image012.png")

# Generate all images
if __name__ == "__main__":
    print("Generating stick figure images...")
    create_image001()
    create_image002()
    create_image003()
    create_image004()
    create_image005()
    create_image006()
    create_image007()
    create_image008()
    create_image009()
    create_image010()
    create_image011()
    create_image012()
    print("\nAll 12 images created successfully!")
    print(f"Images saved to: {output_dir}")