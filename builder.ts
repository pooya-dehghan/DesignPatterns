//builder is realy my own preferal builder design pattern
//its easy and so handy in the same time
//let us have an airline in a big city which has multiple airplane kinds... we want to achive three diffrent airplane by
//hoving builder design pattern

class AirPlane {
  private passengerCapacity: number;
  private jetEngines: number;
  private firstClassMode: boolean;
  private twoRowPassengerSeat: boolean;
  private worldWideMode: boolean;
  private quote: string;

  setEngines(engine: number) {
    this.jetEngines = engine;
  }
  setFirstClass() {
    this.firstClassMode = true;
  }
  setTwoRowPassengerSeat() {
    this.twoRowPassengerSeat = true;
  }
  setQout(quote: string) {
    this.quote = quote;
  }
  setPassengerCapacity(capacity: number) {
    this.passengerCapacity = capacity;
  }
  setWorldWide() {
    this.worldWideMode = true;
  }
}

//now comes the builder main character of this design pattern

interface AirPlaneBuilder {
  setEngines(engine: number): void;
  setFirstClass(): void;
  setTwoRowPassengerSeat(capacity: number): void;
  setQout(qout: string): void;
  setPassengerCapacity(capacity: number): void;
  setWorldWide(): void;
}

class JumbuJets implements AirPlaneBuilder {
  private airplane: AirPlane = new AirPlane();
  setEngines(engine: number): void {
    this.airplane.setEngines(engine);
  }
  setFirstClass(): void {
    this.airplane.setFirstClass();
  }
  setTwoRowPassengerSeat(): void {
    this.airplane.setTwoRowPassengerSeat();
  }
  setQout(qout: string): void {
    this.airplane.setQout(qout);
  }
  setPassengerCapacity(capacity: number): void {
    this.airplane.setPassengerCapacity(capacity);
  }
  setWorldWide(): void {
    this.airplane.setWorldWide();
  }
}

class Turboprops implements AirPlaneBuilder {
  private airplane: AirPlane = new AirPlane();
  setEngines(engine: number): void {
    this.airplane.setEngines(engine);
  }
  setFirstClass(): void {
    this.airplane.setFirstClass();
  }
  setTwoRowPassengerSeat(): void {
    this.airplane.setTwoRowPassengerSeat();
  }
  setQout(qout: string): void {
    this.airplane.setQout(qout);
  }
  setPassengerCapacity(capacity: number): void {
    this.airplane.setPassengerCapacity(capacity);
  }
  setWorldWide(): void {
    this.airplane.setWorldWide();
  }
}

class VLJ implements AirPlaneBuilder {
  private airplane: AirPlane = new AirPlane();
  setEngines(engine: number): void {
    this.airplane.setEngines(engine);
  }
  setFirstClass(): void {
    this.airplane.setFirstClass();
  }
  setTwoRowPassengerSeat(): void {
    this.airplane.setTwoRowPassengerSeat();
  }
  setQout(qout: string): void {
    this.airplane.setQout(qout);
  }
  setPassengerCapacity(capacity: number): void {
    this.airplane.setPassengerCapacity(capacity);
  }
  setWorldWide(): void {
    this.airplane.setWorldWide();
  }
}

//now is turn for director to direct us through all this mess !
class Director {
  private builder: AirPlaneBuilder;
  constructor(builder: AirPlaneBuilder) {
    this.builder = builder;
  }

  buildJumbo() {
    builder.setEngines(4);
    builder.setFirstClass();
    builder.setQout('continent wide mentality');
    builder.setWorldWide();
  }

  buildTurboprops() {
    builder.setEngines(2);
    builder.setQout('for world');
    builder.setPassengerCapacity(100);
  }

  buildVLJ() {
    builder.setEngines(2);
    builder.setQout('constants');
    builder.setPassengerCapacity(5);
  }
}

const builder = new JumbuJets();
const director = new Director(builder);
director.buildJumbo();

//DONE
