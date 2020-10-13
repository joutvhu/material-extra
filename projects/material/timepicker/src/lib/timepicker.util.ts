export class TimepickerUtil {
    public static isEqualsDeep(value1: any, value2: any): boolean {
        return value1 === value2 || (
            (value1 == null || value2 == null || value1.length === value2.length) &&
            JSON.stringify(value1) === JSON.stringify(value2));
    }

    public static isRealNumber(value: any): boolean {
        return typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity;
    }

    public static toString(value: any): string {
        if (value === null || value === undefined || value.constructor === String) {
            return value;
        } else if (value instanceof Date) {
            return value.toJSON();
        } else {
            try {
                return JSON.stringify(value);
            } catch (e) {
                return value + '';
            }
        }
    }
}
