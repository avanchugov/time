# Time

Time is a lightweight library focused on time formatting and convenient manipulation. With it, you can easily perform mathematical operations with dates, compare them, and format them.

## Constructor

The constructor takes 2 arguments:
<br>
`time` — can be either a `Date`, `Time` object or a number (a UNIX timestamp).
<br>
`dateIn` — an optional parameter. If `time` is given in seconds, you can specify `'seconds'`, and the time will be automatically multiplied by 1000.

## Method Descriptions:

### changeDefaultFormat(format: string) => void

This static method changes the default time format. For example, you can specify
`YYYY/MM/DD HH:mm:ss`
and you won’t have to pass this string to the `format` method every time. Important: the format changes for the entire application.

### getDefaultFormat() => string

This method provides the current format as a string.

### values() => {...}

This method returns an object with fields containing the year, month, day, hours, minutes, and seconds of the current date.

### add...(any: number) => Time

These methods add the specified units of time to the current time. For example, `addHours(1)` will add 1 hour to the current date.

### take...(any: number) => Time

These methods work the same way as the previous ones but subtract the specified unit of time from the current date.

### getDifference...(date: Date = new Date()) => number

These methods return the difference between dates in the specified unit. For example, if the current date is now, and you call the method `getDifferenceHours()` passing a time that is 1 hour earlier, the method will return 1. If the time differs by, say, 30 minutes, the method will return 0. And if it differs by two days, it will return 48.

### toMS() => number

The method returns a standard UNIX timestamp (in milliseconds).

### toSeconds() => number

The method returns the UNIX time in seconds.

### format(format: string = Time.defaultFormat) => string

The method converts the current time to a string in the specified format (or the default one). `DD` is replaced by days, `MM` by months, `YYYY` by years, `HH` by hours, `mm` by minutes, and `ss` by seconds. For example, `DD/MM/YYYY HH:mm:ss` will return the current time in the format `DAY/MONTH/YEAR HOUR:MINUTES:SECONDS`.

### startOfDay() => Time

The method sets the time to 0 hours, 0 minutes, and 0 seconds.

### endOfDay() => Time

The method sets the time to 23 hours, 59 minutes, and 59 seconds.

### startOfMonth() => Time

The method sets the date to the first day of the current month and the time to 00:00:00.

### endOfMonth() => Time

The method sets the date to the last day of the current month and the time to 23:59:59.

### isPast() => boolean

The method returns true if this timestamp is earlier than the current time, and false otherwise.

### isFuture() => boolean

The method returns true if this time has not yet occurred, and false otherwise.

### clone() => Time

The method creates a complete copy of the current time, returning a new Time object that is independent of the original.

### isEqual(otherTime: Time) => boolean

The method returns true if both times match exactly.

### getMonthName() => string

Returns the name of the month.

### getDayName() => string

Returns the name of the day.

### parse(dateString: string, format: string = Time.defaultFormat) => Time

Parses a Time object from a string by format.