function preload()
{
}

function setup()
{
    canvas = createCanvas(640, 480); 
    canvas.position(110, 250); 
    video = createCapture(VIDEO); 
    video.hide(); 
    tint_color = "";
}

function draw()
{
    image(video , 150 , 150, 300 , 250);
    tint(tint_color);
    fill(255, 229, 180);
    stoke(	255, 229, 180);
    circle(56, 46, 40);
    describe('red circle with black outline in mid of gray canvas');
    circle(350, 46, 40);
    describe('red circle with black outline in mid of gray canvas');
    circle(56, 300, 40);
    describe('red circle with black outline in mid of gray canvas');
    circle(350, 300 , 40);
    describe('red circle with black outline in mid of gray canvas');
    fill(255, 192, 203);
    stoke(255, 192, 203);
    rect(30, 20, 55, 55);
    describe('white rect with black outline in mid-right of canvas');
}

function take_snapshot()
{
    save('student_name.png');
}