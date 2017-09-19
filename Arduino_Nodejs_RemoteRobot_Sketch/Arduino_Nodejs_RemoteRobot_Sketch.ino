#include<Servo.h>
Servo servo0;
int val;

void setup()
{
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(8, OUTPUT);
  servo0.attach(8);
}

void loop()
{
  if (Serial.available() > 0)
  {
    val = Serial.read();
    if (val == 'F')
    {
      digitalWrite(5, HIGH);
      digitalWrite(4, LOW);
      digitalWrite(3, HIGH);
      digitalWrite(2, LOW);
      delay(100);
      digitalWrite(5, LOW);
      digitalWrite(3, LOW);
    }
    
    else if (val == 'B')
    {
      digitalWrite(5, LOW);
      digitalWrite(4, HIGH);
      digitalWrite(3, LOW);
      digitalWrite(2, HIGH);
      delay(100);
      digitalWrite(4, LOW);
      digitalWrite(2, LOW);
    }

    else if (val == 'R')
    {
      digitalWrite(5, HIGH);
      digitalWrite(4, LOW);
      digitalWrite(3, LOW);
      digitalWrite(2, HIGH);
      delay(100);
      digitalWrite(5, LOW);
      digitalWrite(2, LOW);
    }

    else if (val == 'L')
    {
      digitalWrite(5, LOW);
      digitalWrite(4, HIGH);
      digitalWrite(3, HIGH);
      digitalWrite(2, LOW);
      delay(100);
      digitalWrite(4, LOW);
      digitalWrite(3, LOW);
    }

    else if (val == 'U')
    {
      Serial.print('U');
      servo0.write(50);
      delay(500);
    }

    else if (val == 'D')
    {
      Serial.print('D');
      servo0.write(120);
      delay(500);
    }
  }
}
