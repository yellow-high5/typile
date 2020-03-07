export default class SPaceAge {
  public seconds: number;
  public year: number;

  constructor(seconds: number) {
    this.seconds = seconds;
    this.year = seconds / (60 * 60 * 24 * 365.25);
  }

  四捨五入(x: number) {
    return Math.round(x * 100) / 100;
  }

  onEarth() {
    return this.四捨五入(this.year);
  }

  onMercury() {
    return this.四捨五入(this.year / 0.2408467);
  }

  onVenus() {
    return this.四捨五入(this.year / 0.61519726);
  }

  onMars() {
    return this.四捨五入(this.year / 1.8808158);
  }

  onJupiter() {
    return this.四捨五入(this.year / 11.862615);
  }

  onSaturn() {
    return this.四捨五入(this.year / 29.447498);
  }

  onUranus() {
    return this.四捨五入(this.year / 84.016846);
  }

  onNeptune() {
    return this.四捨五入(this.year / 164.79132);
  }
}
