const { max, min } = require('../exercicio-02')

describe(' Validar funções e valores maior e menor', () => {
    it('Deve retornar o valor máximo', () => {
        expect(max).toBe(100)
    });

    it('Deve retornar o valor mínimo', () => {
        expect(min).toBe(0)
    });
});