export class Time {
    public time: Date;
    private static defaultFormat : string = 'DD/MM/YYYY HH:mm:ss'

    /**
     * @param time can be either a `Date`, `Time` object or a number (a UNIX timestamp).
     * @param dateIn an optional parameter. If `time` is given in seconds, you can specify `'seconds'`, and the time will be automatically multiplied by 1000.
     */
    public constructor(
        time: Date | number | Time = new Date(),
        dateIn?: 'seconds' | 'ms'
    ) {
        if (time instanceof Date) this.time = time;
        else if (time instanceof Time) this.time = time.time;
        else if (dateIn && dateIn === 'seconds') this.time = new Date(time * 1000)
        else this.time = new Date(time)
    }

    /**
     * This static method changes the default time format. For example, you can specify
     * `YYYY/MM/DD HH:mm:ss`
     * and you won’t have to pass this string to the `format` method every time. Important: the format changes for the entire application.
     * @param format default format
     */
    public static changeDefaultFormat(format: string) : void {
        this.defaultFormat = format;
    }

    /**
     * This method provides the current format as a string.
     */
    public static getDefaultFormat = () : string => this.defaultFormat;

    /**
     * This method returns an object with fields containing the year, month, day, hours, minutes, and seconds of the current date.
     */
    public values() : {day: string, month: string, year: number, hours: string, minutes: string, seconds: string} {
        const day = String(this.time.getDate()).padStart(2, '0');
        const month = String(this.time.getMonth() + 1).padStart(2, '0');
        const year = this.time.getFullYear();
        const hours = String(this.time.getHours()).padStart(2, '0');
        const minutes = String(this.time.getMinutes()).padStart(2, '0');
        const seconds = String(this.time.getSeconds()).padStart(2, '0');

        return {day, month, year, hours, minutes, seconds};
    }

    /**
     * These methods add the specified units of time to the current time. For example, `addHours(1)` will add 1 hour to the current date.
     * @param seconds
     */
    public addSeconds(seconds: number) : Time {
        this.time.setSeconds(this.time.getSeconds() + seconds)
        return this;
    }

    /**
     * These methods add the specified units of time to the current time. For example, `addHours(1)` will add 1 hour to the current date.
     * @param minutes
     */
    public addMinutes(minutes: number) : Time {
        this.time.setMinutes(this.time.getMinutes() + minutes)
        return this;
    }

    /**
     * These methods add the specified units of time to the current time. For example, `addHours(1)` will add 1 hour to the current date.
     * @param hours
     */
    public addHours(hours: number) : Time {
        this.time.setHours(this.time.getHours() + hours)
        return this;
    }

    /**
     * These methods add the specified units of time to the current time. For example, `addHours(1)` will add 1 hour to the current date.
     * @param days
     */
    public addDays(days: number) : Time {
        this.time.setHours(this.time.getHours() + (days * 24))
        return this;
    }

    /**
     * These methods work the same way as the previous ones but subtract the specified unit of time from the current date.
     * @param seconds
     */
    public takeSeconds(seconds: number) : Time {
        this.time.setSeconds(this.time.getSeconds() - seconds)
        return this;
    }

    /**
     * These methods work the same way as the previous ones but subtract the specified unit of time from the current date.
     * @param minutes
     */
    public takeMinutes(minutes: number) : Time {
        this.time.setMinutes(this.time.getMinutes() - minutes)
        return this;
    }

    /**
     * These methods work the same way as the previous ones but subtract the specified unit of time from the current date.
     * @param hours
     */
    public takeHours(hours: number) : Time {
        this.time.setHours(this.time.getHours() - hours)
        return this;
    }

    /**
     * These methods work the same way as the previous ones but subtract the specified unit of time from the current date.
     * @param days
     */
    public takeDays(days: number) : Time {
        this.time.setHours(this.time.getHours() - (days * 24))
        return this;
    }

    /**
     * These methods return the difference between dates in the specified unit. For example, if the current date is now, and you call the method `getDifferenceHours()` passing a time that is 1 hour earlier, the method will return 1. If the time differs by, say, 30 minutes, the method will return 0. And if it differs by two days, it will return 48.
     * @param date
     */
    public getDifferenceSeconds(date: Date = new Date()): number {
        return Math.abs(Math.floor((this.time.getTime() - date.getTime()) / 1000));
    }

    /**
     * These methods return the difference between dates in the specified unit. For example, if the current date is now, and you call the method `getDifferenceHours()` passing a time that is 1 hour earlier, the method will return 1. If the time differs by, say, 30 minutes, the method will return 0. And if it differs by two days, it will return 48.
     * @param date
     */
    public getDifferenceMinutes(date: Date = new Date()): number {
        return Math.abs(Math.floor((this.time.getTime() - date.getTime()) / 1000 / 60));
    }

    /**
     * These methods return the difference between dates in the specified unit. For example, if the current date is now, and you call the method `getDifferenceHours()` passing a time that is 1 hour earlier, the method will return 1. If the time differs by, say, 30 minutes, the method will return 0. And if it differs by two days, it will return 48.
     * @param date
     */
    public getDifferenceHours(date: Date = new Date()): number {
        return Math.abs(Math.floor((this.time.getTime() - date.getTime()) / 1000 / 60 / 60));
    }

    /**
     * These methods return the difference between dates in the specified unit. For example, if the current date is now, and you call the method `getDifferenceHours()` passing a time that is 1 hour earlier, the method will return 1. If the time differs by, say, 30 minutes, the method will return 0. And if it differs by two days, it will return 48.
     * @param date
     */
    public getDifferenceDays(date: Date = new Date()): number {
        return Math.abs(Math.floor((this.time.getTime() - date.getTime()) / 1000 / 60 / 60 / 24));
    }

    /**
     * The method returns a standard UNIX timestamp (in milliseconds).
     */
    public toMS() : number {
        return this.time.getTime();
    }

    /**
     * The method returns the UNIX time in seconds.
     */
    public toSeconds() : number {
        return this.time.getTime() / 1000;
    }

    /**
     * The method converts the current time to a string in the specified format (or the default one). `DD` is replaced by days, `MM` by months, `YYYY` by years, `HH` by hours, `mm` by minutes, and `ss` by seconds. For example, `DD/MM/YYYY HH:mm:ss` will return the current time in the format `DAY/MONTH/YEAR HOUR:MINUTES:SECONDS`.
     * @param template
     */
    public format(template: string = Time.defaultFormat): string {
        const { day, month, year, hours, minutes, seconds } = this.values();

        return template
            .replace("DD", day)
            .replace("MM", month)
            .replace("YYYY", String(year))
            .replace("HH", hours)
            .replace("mm", minutes)
            .replace("ss", seconds);
    }

    /**
     * The method sets the time to 0 hours, 0 minutes, and 0 seconds.
     */
    public startOfDay(): Time {
        this.time.setHours(0, 0, 0, 0);
        return this;
    }

    /**
     * The method sets the time to 23 hours, 59 minutes, and 59 seconds.
     */
    public endOfDay(): Time {
        this.time.setHours(23, 59, 59, 999);
        return this;
    }

    /**
     * The method sets the date to the first day of the current month and the time to 00:00:00.
     */
    public startOfMonth(): Time {
        this.time.setDate(1);
        this.startOfDay();
        return this;
    }

    /**
     * The method sets the date to the last day of the current month and the time to 23:59:59.
     */
    public endOfMonth(): Time {
        this.time.setMonth(this.time.getMonth() + 1, 0);
        this.endOfDay();
        return this;
    }

    /**
     * The method returns true if this timestamp is earlier than the current time, and false otherwise.
     */
    public isPast(): boolean {
        return this.time.getTime() < Date.now();
    }

    /**
     * The method returns true if this time has not yet occurred, and false otherwise.
     */
    public isFuture(): boolean {
        return this.time.getTime() > Date.now();
    }

    /**
     * The method creates a complete copy of the current time, returning a new Time object that is independent of the original.
     */
    public clone(): Time {
        return new Time(new Date(this.time));
    }

    /**
     * The method returns true if both times match exactly.
     * @param otherTime
     */
    public isEqual(otherTime: Time): boolean {
        return this.time.getTime() === otherTime.time.getTime();
    }

    /**
     * Returns the name of the month.
     */
    public getMonthName(): string {
        return this.time.toLocaleString('default', { month: 'long' });
    }

    /**
     * Returns the name of the day.
     */
    public getDayName(): string {
        return this.time.toLocaleString('default', { weekday: 'long' });
    }

    /**
     * Parses a Time object from a string by format.
     * @param dateString
     * @param format
     */
    public static parse(dateString: string, format: string = Time.defaultFormat): Time {
        const map: { [key: string]: number } = { DD: 0, MM: 0, YYYY: 0, HH: 0, mm: 0, ss: 0 };

        let i = 0;
        format.replace(/(DD|MM|YYYY|HH|mm|ss)/g, (token) => {
            map[token] = parseInt(dateString.substr(i, token.length));
            i += token.length;
            return token;
        });

        const parsedDate = new Date(
            map['YYYY'],
            map['MM'] - 1,
            map['DD'],
            map['HH'],
            map['mm'],
            map['ss']
        );
        return new Time(parsedDate);
    }

    public timeUntil(date: Date = new Date()): { days: number, hours: number, minutes: number, seconds: number } {
        const diff = this.time.getTime() - date.getTime();

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        let seconds = Math.floor(diff / 1000);

        const days = Math.floor(seconds / (24 * 3600));
        seconds -= days * 24 * 3600;

        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;

        const minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

        return { days, hours, minutes, seconds };
    }

}