let car1;
let parking;
let car2;
let car3;
let led,d,i,x,y,r,r1,t1,t2,tr,a1,a2,ar;
let state = true;
let second_check = true;
let third_check = true;
let count,available_slots,red,green,blue,red_2,green_2,blue_2;
function setup(){
		frameRate(40);
		x=-60;
		y=300;
		r=0;
		r1 = 90;
		count = 12;
		available_slots = 22 - count;
		t1 = -100;
		t2 = 330;
		tr = 90;
		red = 0;
		green = 0;
		blue = 0;
		red_2 = 255;
		green_2 = 0;
		blue_2 = 0;
		a1 = -150;
		a2 = 330;
		ar = 90;
		

		createCanvas(1080,748);
		angleMode(DEGREES);
		setInterval(slot_blink, 500);
		parking = loadImage('car_parking.jpeg');
		car1 = loadImage('car.png');
		car2 = loadImage('car 2.png');
		car3 = loadImage('car.png');
		led = loadImage('LED.png');

		
}
function car_one(car,x,y,r){
	push();
	translate(x,y);
	rotate(r);
	translate(-x,-y);
	imageMode(CENTER);
	image(car,x,y,width/10,height/7);
	pop();
}
function shapes(x,y,wi,he,r,red,green,blue){
	push();
	translate(x,y);
	rotate(r);
	translate(-x,-y);
	strokeWeight(5);
	stroke(red,green,blue);
	noFill();
	rect(x,y,width/wi,height/he);
	pop();
}
function slot_blink() {
  state = !state;
  i = "Nearest slot is R1C1";

	if (t2 < 235){
  	state=false;
  	second_check = ! second_check;
	i = "Nearest slot is R2C1";
  }
	if (a2>465){
		second_check = false;
		third_check = !third_check;
		i = "Nearest slot is R1C3";


	}
}

function write(a,x,y,text_rotation){
	push();
	translate(x,y);
	rotate(text_rotation);
	translate(-x,-y);
	textSize(16);
	text(a,x,y,);
	pop();	
}				
	
function draw(){
		image(parking,0,0);

		if (second_check) {
    	shapes(40,415,18,6,0,255,green,blue);
  	}
		else {
    	shapes(40,415,18,6,0,red,255,blue);
  	}

		if (state){
			shapes(40,175,18,6,0,255,green,blue);
		}
		else {
			shapes(40, 175, 18, 6, 0, red, 255, blue);
		}
		if (third_check){
			shapes(160,175,18,6,0,255,green,blue);
		}
		else {
			shapes(160, 175, 18, 6, 0, red, 255, blue);
		}
		
			//For Row 1
			write("R1C1", 50, 175, r);
			write("R1C2", 105, 175, r);
			write("R1C3", 160, 175, r);
			write("R1C4", 215, 175, r);
			write("R1C5", 270, 175, r);
			write("R1C6", 330, 175, r);
			write("R1C7", 385, 175, r);
			write("R1C8", 440, 175, r);
			write("R1C9", 495, 175, r);
			write("R1C10", 555, 175, r);
			write("R1C11", 615, 175, r);
			//For Row 2
			write("R2C1", 50, 540, r);
			write("R2C2", 105, 540, r);
			write("R2C3", 160, 540, r);
			write("R2C4", 215, 540, r);
			write("R2C5", 270, 540, r);
			write("R2C6", 330, 540, r);
			write("R2C7", 385, 540, r);
			write("R2C8", 440, 540, r);
			write("R2C9", 495, 540, r);
			write("R2C10", 555, 540, r);
			write("R2C11", 615, 540, r);
		

		// display cars
		image(car2,360,175,width/10,height/7);
		image(car1,250,175,width/10,height/7);
		image(car3,80,180,width/10,height/7);
		image(car1,360,420,width/10,height/7);
		image(led,850,20,width/6,height/6);

		// display shapes
		shapes(210,415,18,6,0,250,green,blue);
		shapes(270,415,18,6,0,250,green,blue);
		shapes(330,415,18,6,0,250,green,blue);
		shapes(500,415,18,6,0,250,green,blue);
		shapes(560,415,18,6,0,250,green,blue);

		shapes(330, 175, 18, 6, 0, 255, green, blue);
		shapes(500, 175, 18, 6, 0, 255, green, blue);
		shapes(440, 175, 18, 6, 0, red_2, green_2, blue);
		shapes(610, 175, 18, 6, 0, 255, green, blue);
		text('Available slots ',870,110);
		text('Filled slots ',870,125);
		text(count,950,110);
		text(available_slots,950,125);
		text(d,870,75);
		text(i,870,45);




		// animated cars
		car_one(car2,t1,t2,tr);
		car_one(car1,a1,a2,ar);

		if (key === 'a'){
			if (t1<70){
				t1+=5;
			}
			if (t1>=70 && t2 > 230 ){
				if (tr>0){
					tr -=10;
				}
				t2 -=5;
				d = "Car parked at R1C1";

			}

			if (t2===240){
				count = count-1;
			    available_slots = available_slots+1;
				

			}

		}
		
		if (key === 'b'){
		if (a1 < 70){
				a1 +=5;
			}
			    if (a1 >=70 && a2<470 ){
				if (ar<180){
					ar +=10;
				}
				a2 +=5;
				d = "Car parked at R2C1";

			}
			if (a2===460){
				count = count-1;
				available_slots = available_slots+1;
				
				
			}

		}
		car_one(car3,x,y,r1);
		if(key==='c'){
			if(x<470){
				x+=5;
			}

		}
			if(x>=470&&y>=230){
				if(r1>0){
					r1-=10;
		        }
				y-=5;
				d = "Car parked at R1C8";

			}
			if (y===230){
				count = count-1;
				red_2 = 0;
				green_2 = 255;
				available_slots = available_slots+1;
			}

		}
