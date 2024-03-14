const { celsiusParaFahrenheit } = require('./conversorTemperatura');

test('lança uma exceção caso nao converta', () =>{
    expect(() => celsiusParaFahrenheit(20).toThrow("Sei lá se ta certo isso"));
});
