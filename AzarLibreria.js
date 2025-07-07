/**
 *  Clase con métodos estáticos para manejo de datos aleatorios
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 */
class Azar{
	/**
	 * Retorna un número aleatorio entero entre mínimo y máximo, ambos incluyentes
	 * @param minimo - Mínimo valor entero
	 * @param maximo - Máximo valor entero
	 * @returns {*} - Número entero
	 */
	static EnteroEntre(minimo, maximo){
		return Math.round(Math.random() * (maximo-minimo)) + minimo;
	}

	/**
	 * Retorna un número real aleatorio entre mínimo y máximo
	 * @param minimo
	 * @param maximo
	 * @returns {*} - Número real
	 */
	static RealEntre(minimo, maximo){
		return Math.random() * (maximo-minimo) + minimo;
	}

	/**
	 * Retorna una cadena al azar respetando el formato si es @ lo reemplaza por una letra minúscula, si es Ç lo reemplaza por una letra mayúscula, si es # lo reemplaza por un número
	 * @param {string} Formato
	 * @returns {*} - Cadena al azar respetando el formato
	 */
	static CadenaFormato(Formato){
		let Cadena = "";
		for (let cont=0; cont < Formato.length; cont++){
			if(Formato[cont] === '@') Cadena += this.LetraMinuscula();
			else if(Formato[cont] === 'Ç') Cadena += this.LetraMayuscula();
			else if(Formato[cont] === '#') Cadena += this.EnteroEntre(0, 9).toString();
			else Cadena += Formato[cont];
		}
		return Cadena;
	}

	static LetraMinuscula(){
		let Cadena = "abcdefghijklmnñopqrstuvwxyz";
		let Posicion = this.EnteroEntre(0, Cadena.length-1);
		return Cadena[Posicion];
	}

	static LetraMayuscula(){
		let Cadena = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
		let Posicion = this.EnteroEntre(0, Cadena.length-1);
		return Cadena[Posicion];
	}

	/**
	 * Retorna una expresión algebraica del tipo Y=F(X) con una longitud entre mínima y máxima
	 * A genera número, variable, A operador A, (A operador A), funcion(A operador A)
	 * @param longitudMinima - Mínimo tamaño de la ecuación
	 * @param longitudMaxima - Máximo tamaño de la ecuación
	 * @returns {string} - Ecuación Y=F(X)
	 */
	static EcuacionAzar(longitudMinima, longitudMaxima){
		let Cadena = "A";
		let Nueva = "";
		let Funcion = "";
		let contA = 1;

		while(Cadena.length < longitudMinima || contA > 0){
			Cadena = "A";
			contA = 1;

			while(contA > 0 && Cadena.length < longitudMaxima) {
				switch (this.EnteroEntre(0, 4)) {
					case 0:
						Funcion = "";
						break;
					case 1:
						Funcion = "sen";
						break;
					case 2:
						Funcion = "cos";
						break;
					case 3:
						Funcion = "tan";
						break;
					case 4:
						Funcion = "abs";
						break;
				}

				switch (this.EnteroEntre(1, 14)) {
					case 1:
					case 2:
					case 3:
						Nueva = Cadena.replace("A", "0." + this.EnteroEntre(1, 9).toString());
						contA--;
						break;
					case 4:
					case 5:
					case 6:
						Nueva = Cadena.replace("A", "x");
						contA--;
						break;
					case 7:
						Nueva = Cadena.replace("A", "A+A");
						contA++;
						break;
					case 8:
						Nueva = Cadena.replace("A", "A-A");
						contA++;
						break;
					case 9:
						Nueva = Cadena.replace("A", "A*A");
						contA++;
						break;
					case 10:
						Nueva = Cadena.replace("A", "A/A");
						contA++;
						break;
					case 11:
						Nueva = Cadena.replace("A", Funcion + "(A+A)");
						contA++;
						break;
					case 12:
						Nueva = Cadena.replace("A", Funcion + "(A-A)");
						contA++;
						break;
					case 13:
						Nueva = Cadena.replace("A", Funcion + "(A*A)");
						contA++;
						break;
					case 14:
						Nueva = Cadena.replace("A", Funcion + "(A/A)");
						contA++;
						break;
				}
				Cadena = Nueva;
			}
		}
		return Cadena;
	}
}