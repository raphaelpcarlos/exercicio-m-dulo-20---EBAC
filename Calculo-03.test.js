const somaTotal = require('./exercicio-03')

describe('Validar soma de todos os multiplos e numeros inteiros', () => {
    it('Deve validar a soma total dos numeros divisiveis or 5 e 7', () => {
        expect(somaTotal()).toBe(156361)
    });
});