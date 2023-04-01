import { getPercents } from "../percents";

describe("Проверка рассчёта процента от числа", () => {
    it("10% от 100 = 10", () => expect(getPercents(10, 100)).toBe(10));
    it("15% от 30 = 4.5", () => expect(getPercents(15, 30)).toBe(4.5));
    it("3% от 70 = 2.1", () => expect(getPercents(3, 70)).toBe(2.1));
    it("0% от 10 = 0", () => expect(getPercents(0, 10)).toBe(0));
    it("-3% от 50 = error", () => expect(getPercents(-3, 50)).toBe("Процент не может быть меньше нуля."));
    it("30% от -100 = error", () => expect(getPercents(30, -100)).toBe("Ожидается положительное число."));
    it("150% от 30 = error", () => expect(getPercents(150, 30)).toBe("Процент не может быть больше ста."));
});