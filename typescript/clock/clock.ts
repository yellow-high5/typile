export default class Clock {
  public clock_hour: number;
  public clock_minutes: number;

  constructor(hour: number, minutes?: number) {
    let adjust_hour: number = 0;
    if (minutes) {
      adjust_hour = (minutes / 60) | 0;
      if (minutes < 0) {
        adjust_hour--;
        this.clock_minutes = 60 + (minutes % 60);
      } else {
        this.clock_minutes = minutes % 60;
      }
    } else {
      this.clock_minutes = 0;
    }

    if ((hour + adjust_hour) % 24 < 0) {
      this.clock_hour = 24 + ((hour + adjust_hour) % 24);
    } else {
      this.clock_hour = (hour + adjust_hour) % 24;
    }
  }

  plus(plus_minutes: number): Clock {
    let calculate_minutes = this.clock_minutes + plus_minutes;
    if (calculate_minutes < 60) {
      this.clock_minutes = calculate_minutes;
    } else {
      this.clock_minutes = calculate_minutes % 60;
      let calculate_hour = this.clock_hour + ((calculate_minutes / 60) | 0);
      if (calculate_hour < 0) {
        this.clock_hour = 24 + (calculate_hour % 24);
      } else {
        this.clock_hour = calculate_hour % 24;
      }
    }
    return this;
  }

  minus(minus_minutes: number): Clock {
    let calculate_minutes = this.clock_minutes - minus_minutes;
    if (calculate_minutes < 0) {
      this.clock_minutes = 60 + (calculate_minutes % 60);
      let calculate_hour = this.clock_hour + ((calculate_minutes / 60) | 0) - 1;
      if (calculate_hour % 24 < 0) {
        this.clock_hour = 24 + (calculate_hour % 24);
      } else {
        this.clock_hour = calculate_hour % 24;
      }
    } else {
      this.clock_minutes = calculate_minutes;
    }
    return this;
  }

  equals(clock: Clock): boolean {
    if (
      this.clock_hour === clock.clock_hour &&
      this.clock_minutes === clock.clock_minutes
    ) {
      return true;
    } else {
      return false;
    }
  }

  toString(): string {
    let display_hour = this.clock_hour.toString();
    let display_minutes = this.clock_minutes.toString();

    return `${display_hour.length == 1 ? "0" + display_hour : display_hour}:${
      display_minutes.length == 1 ? "0" + display_minutes : display_minutes
    }`;
  }
}
