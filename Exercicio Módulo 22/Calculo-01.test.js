const mdc = require('../exercicio-01');

describe('Validação dos resultados do MDC', () => {
    it('calculo correto de valores', () => {
        expect(mdc(12, 9)).toBe(3)
    });

    it('Calculo incorreto', () => {
        expect(mdc(18, 3)).not.toBe(6)
    });

    it('Calular com valores negativos', () => {
        expect(mdc(-3 , -4)).toBe(1)
    });

    it('Calcular com valor negativo saida incorreta', () => {
        expect(mdc(-68, -2)).toBe(8)
    });
});