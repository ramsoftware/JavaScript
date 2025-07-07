/*  Clase con funciones para hacer gráficos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.1 (07 de julio de 2025)
 * */
class Grafica {
	/**
	 * Captura el área gráfica (canvas)
	 * @param {HTMLCanvasElement} Lienzo - El lienzo (id del canvas) de HTML5
	 */
	constructor (Lienzo){
		this.Lienzo = Lienzo;
		this.Contexto = Lienzo.getContext('2d');
	}

	/**
	 * Retorna el alto del área gráfica o lienzo
	 * @return {number} Alto
	 */
	LienzoAlto(){
		return this.Lienzo.height;
	}

	/**
	 * Retorna el ancho del área gráfica o lienzo
	 * @return {number} Ancho
	 */
	LienzoAncho(){
		return this.Lienzo.width;
	}

	/**
	 * Dibuja el perímetro del lienzo
	 * @param {number} GrosorBorde - Grosor de la línea del perímetro
	 * @param {string} ColorBorde - Color expresado en hexadecimal que tendrá la línea del perímetro
	 */
	LienzoBorde(GrosorBorde, ColorBorde){
        this.Rectangulo(0, 0, this.Lienzo.width, this.Lienzo.height, GrosorBorde, ColorBorde);
	}

	/**
	 * Poner un color de fondo al lienzo
	 * @param {string} ColorFondo - Color expresado en hexadecimal que tendrá el fondo del lienzo
	 */
    LienzoFondo(ColorFondo){
        this.RectanguloRelleno(0, 0, this.Lienzo.width, this.Lienzo.height, ColorFondo);
    }

	/**
	 * Fondo y borde del lienzo
	 * @param {string} ColorFondo - Color expresado en hexadecimal que tendrá el fondo del lienzo
	 * @param {number} GrosorBorde - Grosor de la línea del perímetro
	 * @param {string} ColorBorde - Color expresado en hexadecimal que tendrá la línea del perímetro
	 */
	LienzoFondoBorde(ColorFondo, GrosorBorde, ColorBorde){
		this.LienzoFondo(ColorFondo);
		this.LienzoBorde(GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una línea recta
	 * @param {number} Xinicio - Valor X de la coordenada inicial
	 * @param {number} Yinicio - Valor Y de la coordenada inicial
	 * @param {number} Xfin - Valor X de la coordenada final
	 * @param {number} Yfin - Valor Y de la coordenada final
	 * @param {number} GrosorLinea - Grosor de la línea
	 * @param {string} ColorLinea - Color expresado en hexadecimal que tendrá la línea
	 */
	Linea(Xinicio, Yinicio, Xfin, Yfin, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(Xinicio, Yinicio); //Mueve el cursor a la posición
		this.Contexto.lineTo(Xfin, Yfin); //Hace una línea
		this.Contexto.stroke(); //Hace visible la línea
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja las líneas que conectan varios puntos
	 * @param {Punto[]} Puntos - Lista de objetos de la clase Punto
	 * @param {number} GrosorLinea - Grosor de la línea
	 * @param {string} ColorLinea - Color expresado en hexadecimal que tendrá la línea
	 */
	LineasPuntos(Puntos, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(Puntos[0].posX, Puntos[0].posY); //Punto inicial
		for(let cont = 1; cont < Puntos.length; cont++)
			this.Contexto.lineTo(Puntos[cont].posX, Puntos[cont].posY);
		this.Contexto.stroke(); //Hace visible la línea
		this.Contexto.closePath();
	}

	/**
	 * Dibuja las líneas que hay en un listado
	 * @param {Linea[]} LineaLst - Lista de objetos de la clase Linea
	 */
	LineasListas(LineaLst){
		for(let cont = 0; cont < LineaLst.length; cont++)
			this.LineaObj(LineaLst[cont]);
	}
	
	/**
	 * Dibuja una línea dado el objeto línea
	 * @param {Linea} obj - Objeto Línea
	 */
	LineaObj(obj){
		this.Linea(obj.posXini, obj.posYini, obj.posXfin, obj.posYfin, obj.Grosor, obj.Color);		
	}		

	/**
	 * Dibuja un triángulo dada las coordenadas
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {number} GrosorBorde - Grosor del borde del triángulo
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Triangulo(posX1, posY1, posX2, posY2, posX3, posY3, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.stroke(); //Hace visible el triángulo
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja un triángulo relleno dada las coordenadas
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	TrianguloRelleno(posX1, posY1, posX2, posY2, posX3, posY3, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibuja un triángulo relleno de un color y borde de otro color
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {number} GrosorBorde - Grosor del borde del triángulo
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	TrianguloRellenoBorde(posX1, posY1, posX2, posY2, posX3, posY3, ColorRelleno, GrosorBorde, ColorBorde){
		this.TrianguloRelleno(posX1, posY1, posX2, posY2, posX3, posY3, ColorRelleno);
		this.Triangulo(posX1, posY1, posX2, posY2, posX3, posY3, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de triángulos
	 * @param {Triangulo[]} TrianguloLst - Lista de objetos de la clase Triangulo
	 */
	TrianguloLista(TrianguloLst){
		for(let cont = 0; cont < TrianguloLst.length; cont++)
			this.TrianguloObj(TrianguloLst[cont]);
	}
	
	/**
	 * Dibuja un triángulo dado el objeto triángulo
	 * @param {Triangulo} obj - Objeto Triangulo
	 */
	TrianguloObj(obj){
		switch(obj.Tipo) {
			case 1: this.Triangulo(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.TrianguloRelleno(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.ColorRelleno); break;
			case 3: this.TrianguloRellenoBorde(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;
		}
	}

	/**
	 * Dibuja un rectángulo
	 * @param {number} posX - Posición X de la coordenada superior izquierda del rectángulo
	 * @param {number} posY - Posición Y de la coordenada superior izquierda del rectángulo
	 * @param {number} Ancho - Ancho del rectángulo
	 * @param {number} Alto - Alto del rectángulo
	 * @param {number} GrosorBorde - Grosor del borde del rectángulo
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Rectangulo(posX, posY, Ancho, Alto, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.rect(posX, posY, Ancho, Alto);
		this.Contexto.stroke(); //Hace visible el rectángulo
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja un rectángulo relleno
	 * @param {number} posX - Posición X de la coordenada superior izquierda del rectángulo
	 * @param {number} posY - Posición Y de la coordenada superior izquierda del rectángulo
	 * @param {number} Ancho - Ancho del rectángulo
	 * @param {number} Alto - Alto del rectángulo
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	RectanguloRelleno(posX, posY, Ancho, Alto, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.fillRect(posX, posY, Ancho, Alto);
		this.Contexto.closePath();
	}

	/**
	 * Dibuja un rectángulo relleno con borde
	 * @param {number} posX - Posición X de la coordenada superior izquierda del rectángulo
	 * @param {number} posY - Posición Y de la coordenada superior izquierda del rectángulo
	 * @param {number} Ancho - Ancho del rectángulo
	 * @param {number} Alto - Alto del rectángulo
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {number} GrosorBorde - Grosor del borde del rectángulo
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	RectanguloRellenoBorde(posX, posY, Ancho, Alto, ColorRelleno, GrosorBorde, ColorBorde){
		this.RectanguloRelleno(posX, posY, Ancho, Alto, ColorRelleno);
		this.Rectangulo(posX, posY, Ancho, Alto, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de rectángulos
	 * @param {Rectangulo[]} RectanguloLst - Lista de objetos de la clase Rectangulo
	 */
	RectanguloLista(RectanguloLst){
		for(let cont = 0; cont < RectanguloLst.length; cont++)
			this.RectanguloObj(RectanguloLst[cont]);
	}
	
	/**
	 * Dibuja un rectángulo dado el objeto rectángulo
	 * @param {Rectangulo} obj - Objeto Rectangulo
	 */
	RectanguloObj(obj){
		switch(obj.Tipo){
			case 1: this.Rectangulo(obj.posX, obj.posY, obj.Ancho, obj.Alto, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.RectanguloRelleno(obj.posX, obj.posY, obj.Ancho, obj.Alto, obj.ColorRelleno); break;
			case 3: this.RectanguloRellenoBorde(obj.posX, obj.posY, obj.Ancho, obj.Alto, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;			
		}
	}

	/**
	 * Dibujar un polígono de 4 lados
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {number} posX4 - Valor X de la cuarta coordenada
	 * @param {number} posY4 - Valor Y de la cuarta coordenada
	 * @param {number}  GrosorBorde - Grosor del borde del rectángulo
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Poligono4Lados(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX4, posY4);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.stroke(); //Hace visible el polígono
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un polígono de 4 lados relleno
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {number} posX4 - Valor X de la cuarta coordenada
	 * @param {number} posY4 - Valor Y de la cuarta coordenada
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	Poligono4LadosRelleno(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.moveTo(posX1, posY1); //Mueve el cursor a la posición
		this.Contexto.lineTo(posX2, posY2);
		this.Contexto.lineTo(posX3, posY3);
		this.Contexto.lineTo(posX4, posY4);
		this.Contexto.lineTo(posX1, posY1);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un polígono de 4 lados relleno
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {number} posX4 - Valor X de la cuarta coordenada
	 * @param {number} posY4 - Valor Y de la cuarta coordenada
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {number} GrosorBorde - Grosor del borde del rectángulo
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Poligono4LadosRellenoBorde(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, ColorRelleno, GrosorBorde, ColorBorde){
		this.Poligono4LadosRelleno(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, ColorRelleno);
		this.Poligono4Lados(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de polígonos de 4 lados
	 * @param {Poligono4Lados[]} Poligono4LadosLst - Lista de objetos de la clase Poligono4Lados
	 */
	Poligono4LadosLista(Poligono4LadosLst){
		for(let cont = 0; cont < Poligono4LadosLst.length; cont++)
			this.Poligono4LadosObj(Poligono4LadosLst[cont]);
	}
	
	/**
	 * Dibuja un polígono de 4 lados dado el objeto polígono de 4 lados
	 * @param {Poligono4Lados} obj - Objeto Poligono4Lados
	 */
	Poligono4LadosObj(obj){
		switch(obj.Tipo){
			case 1: this.Poligono4Lados(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.posX4, obj.posY4, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.Poligono4LadosRelleno(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.posX4, obj.posY4, obj.ColorRelleno); break;
			case 3: this.Poligono4LadosRellenoBorde(obj.posX1, obj.posY1, obj.posX2, obj.posY2, obj.posX3, obj.posY3, obj.posX4, obj.posY4, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;		
		}
	}	

	/**
	 * Dibuja un polígono dados los puntos
	 * @param {Punto[]} Puntos - Lista de Puntos
	 * @param {number} GrosorBorde - Grosor del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Poligono(Puntos, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.moveTo(Puntos[0].posX, Puntos[0].posY); //Punto inicial
		for(let cont = 1; cont < Puntos.length; cont++)
			this.Contexto.lineTo(Puntos[cont].posX, Puntos[cont].posY);
		this.Contexto.lineTo(Puntos[0].posX, Puntos[0].posY);
		this.Contexto.stroke(); //Hace visible el polígono
		this.Contexto.closePath();
	}	
	
	/**
	 * Dibuja un polígono relleno dados los puntos
	 * @param {Punto[]} Puntos - Lista de Puntos
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	PoligonoRelleno(Puntos, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.moveTo(Puntos[0].posX, Puntos[0].posY); //Punto inicial
		for(let cont = 1; cont < Puntos.length; cont++)
			this.Contexto.lineTo(Puntos[cont].posX, Puntos[cont].posY);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibujar polígono relleno con borde
	 * @param {Punto[]} Puntos - Lista de Puntos
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {number} GrosorBorde - Grosor del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	PoligonoRellenoBorde(Puntos, ColorRelleno, GrosorBorde, ColorBorde){
		this.PoligonoRelleno(Puntos, ColorRelleno);
		this.Poligono(Puntos, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una curva Bézier
	 * @param {number} IniX - Valor X de la coordenada inicial
	 * @param {number} IniY - Valor Y de la coordenada inicial
	 * @param {number} ControlX1 - Valor X de la primera coordenada de control
	 * @param {number} ControlY1 - Valor Y de la primera coordenada de control
	 * @param {number} ControlX2 - Valor X de la segunda coordenada de control
	 * @param {number} ControlY2 - Valor Y de la segunda coordenada de control
	 * @param {number} FinalX3 - Valor X de la coordenada final
	 * @param {number} FinalY3 - Valor Y de la coordenada final
	 * @param {number} GrosorLinea - Grosor de la línea
	 * @param {string} ColorLinea - Color expresado en hexadecimal para la linea
	 */
	Bezier(IniX, IniY, ControlX1, ControlY1, ControlX2, ControlY2, FinalX3, FinalY3, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(IniX, IniY); //Punto inicial
		this.Contexto.bezierCurveTo(ControlX1, ControlY1, ControlX2, ControlY2, FinalX3, FinalY3);
		this.Contexto.stroke(); //Hace visible la curva
		this.Contexto.closePath();
	}	
	
	/**
	 * Dibuja un arco
	 * @param {number} posX - Valor X de la coordenada central del arco
	 * @param {number} posY - Valor Y de la coordenada central del arco
	 * @param {number} Radio - Radio que tendrá el arco
	 * @param {number} angIni - Ángulo inicial en grados del arco
	 * @param {number} angFin - Ángulo final en grados del arco
	 * @param {number} GrosorLinea - Grosor de la línea
	 * @param {string} ColorLinea - Color expresado en hexadecimal para la línea
	 * @param {boolean} DibujaContraReloj - Si se dibuja el arco a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 */
	Arco(posX, posY, Radio, angIni, angFin, GrosorLinea, ColorLinea, DibujaContraReloj){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		let AnguloIni = angIni * Math.PI / 180; //Angulo inicial (0 grados) en radianes
		let AnguloFin = angFin * Math.PI / 180; //Angulo final (360 grados) en radianes
		this.Contexto.arc(posX, posY, Radio, AnguloIni, AnguloFin, DibujaContraReloj);
		this.Contexto.stroke(); //Hace visible la curva
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una curva Cuadrática
	 * @param {number} IniX - Valor X de la coordenada inicial de la curva
	 * @param {number} IniY - Valor Y de la coordenada inicial de la curva
	 * @param {number} ControlX1 - Valor X de la coordenada de control de la curva
	 * @param {number} ControlY1 - Valor Y de la coordenada de control de la curva
	 * @param {number} FinalX2 - Valor X de la coordenada final de la curva
	 * @param {number} FinalY2 - Valor Y de la coordenada final de la curva
	 * @param {number} GrosorLinea - Grosor de la línea
	 * @param {string} ColorLinea - Color expresado en hexadecimal para la línea
	 */
	CurvaCuadratica(IniX, IniY, ControlX1, ControlY1, FinalX2, FinalY2, GrosorLinea, ColorLinea){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorLinea;
		this.Contexto.strokeStyle = ColorLinea;
		this.Contexto.moveTo(IniX, IniY); //Punto inicial
		this.Contexto.quadraticCurveTo(ControlX1, ControlY1, FinalX2, FinalY2);
		this.Contexto.stroke(); //Hace visible la curva
		this.Contexto.closePath();
	}
	
	/**
	 * Dibuja una elipse
	 * @param {number} posX - Coordenada X del centro de la elipse
	 * @param {number} posY - Coordenada Y del centro de la elipse
	 * @param {number} RadioX - Radio en el eje X de la elipse
	 * @param {number} RadioY - Radio en el eje Y de la elipse
	 * @param {number} RotaElipse - Rotación de la elipse en grados
	 * @param {number} angIni - Ángulo inicial en grados de dibujo de la elipse
	 * @param {number} angFin - Ángulo final en grados de dibujo de la elipse
	 * @param {boolean} ContraReloj - Si se dibuja la elipse a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 * @param {number} GrosorBorde - Grosor del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Elipse(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		let AnguloIni = angIni * Math.PI / 180; //Angulo inicial (0 grados) en radianes
		let AnguloFin = angFin * Math.PI / 180; //Angulo final (360 grados) en radianes
		let AnguloRota = RotaElipse * Math.PI / 180;
		this.Contexto.ellipse(posX, posY, RadioX, RadioY, AnguloRota, AnguloIni, AnguloFin, ContraReloj);
		this.Contexto.stroke(); //Hace visible la elipse
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una elipse rellena
	 * @param {number} posX - Coordenada X del centro de la elipse
	 * @param {number} posY - Coordenada Y del centro de la elipse
	 * @param {number} RadioX - Radio en el eje X de la elipse
	 * @param {number} RadioY - Radio en el eje Y de la elipse
	 * @param {number} RotaElipse - Rotación de la elipse en grados
	 * @param {number} angIni - Ángulo inicial en grados de dibujo de la elipse
	 * @param {number} angFin - Ángulo final en grados de dibujo de la elipse
	 * @param {boolean} ContraReloj - Si se dibuja la elipse a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	ElipseRellena(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		let AnguloIni = angIni * Math.PI / 180; //Angulo inicial (0 grados) en radianes
		let AnguloFin = angFin * Math.PI / 180; //Angulo final (360 grados) en radianes
		let AnguloRota = RotaElipse * Math.PI / 180;
		this.Contexto.ellipse(posX, posY, RadioX, RadioY, AnguloRota, AnguloIni, AnguloFin, ContraReloj);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una elipse rellena con borde
	 * @param {number} posX - Coordenada X del centro de la elipse
	 * @param {number} posY - Coordenada Y del centro de la elipse
	 * @param {number} RadioX - Radio en el eje X de la elipse
	 * @param {number} RadioY - Radio en el eje Y de la elipse
	 * @param {number} RotaElipse - Rotación de la elipse en grados
	 * @param {number} angIni - Ángulo inicial en grados de dibujo de la elipse
	 * @param {number} angFin - Ángulo final en grados de dibujo de la elipse
	 * @param {boolean} ContraReloj - Si se dibuja la elipse a contrareloj (true) o siguiendo las manecillas del reloj (false)
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {number} GrosorBorde - Grosor del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	ElipseRellenaBorde(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, ColorRelleno, GrosorBorde, ColorBorde){
		this.Elipse(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, GrosorBorde, ColorBorde);
		this.ElipseRellena(posX, posY, RadioX, RadioY, RotaElipse, angIni, angFin, ContraReloj, ColorRelleno);
	}

	/**
	 * Dibuja una lista de elipses
	 * @param {Elipse[]} ElipseLst - Lista de objetos de la clase Elipse
	 */
	ElipseLista(ElipseLst){
		for(let cont = 0; cont < ElipseLst.length; cont++)
			this.ElipseObj(ElipseLst[cont]);
	}
	
	/**
	 * Dibuja una elipse dado el objeto elipse
	 * @param {Elipse} obj - Objeto Elipse
	 */
	ElipseObj(obj){
		switch(obj.Tipo){
			case 1: this.Elipse(obj.posX, obj.posY, obj.RadioX, obj.RadioY, obj.RotaFigura, obj.angIni, obj.angFin, obj.Reloj, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.ElipseRellena(obj.posX, obj.posY, obj.RadioX, obj.RadioY, obj.RotaFigura, obj.angIni, obj.angFin, obj.Reloj, obj.ColorRelleno); break;
			case 3: this.ElipseRellenaBorde(obj.posX, obj.posY, obj.RadioX, obj.RadioY, obj.RotaFigura, obj.angIni, obj.angFin, obj.Reloj, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;		
		}
	}	

	/**
	 * Dibuja un círculo
	 * @param {number} posX - Coordenada X del centro del círculo
	 * @param {number} posY - Coordenada Y del centro del círculo
	 * @param {number} Radio - Radio del círculo
	 * @param {number} GrosorBorde - Grosor del perímetro del círculo
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	Circulo(posX, posY, Radio, GrosorBorde, ColorBorde){
		this.Contexto.beginPath();
		this.Contexto.lineWidth = GrosorBorde;
		this.Contexto.strokeStyle = ColorBorde;
		this.Contexto.arc(posX, posY, Radio, 0, 2 * Math.PI, false);
		this.Contexto.stroke(); //Dibuja el círculo
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un círculo relleno
	 * @param {number} posX - Coordenada X del centro del círculo
	 * @param {number} posY - Coordenada Y del centro del círculo
	 * @param {number} Radio - Radio del círculo
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 */
	CirculoRelleno(posX, posY, Radio, ColorRelleno){
		this.Contexto.beginPath();
		this.Contexto.fillStyle = ColorRelleno;
		this.Contexto.arc(posX, posY, Radio, 0, 2 * Math.PI, false);
		this.Contexto.fill(); //Rellena con el color
		this.Contexto.closePath();
	}

	/**
	 * Dibujar un círculo relleno con borde
	 * @param {number} posX - Coordenada X del centro del círculo
	 * @param {number} posY - Coordenada Y del centro del círculo
	 * @param {number} Radio - Radio del círculo
	 * @param {string} ColorRelleno - Color expresado en hexadecimal para el relleno
	 * @param {number} GrosorBorde - Grosor del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal para el borde
	 */
	CirculoRellenoBorde(posX, posY, Radio, ColorRelleno, GrosorBorde, ColorBorde) {
		this.CirculoRelleno(posX, posY, Radio, ColorRelleno);
		this.Circulo(posX, posY, Radio, GrosorBorde, ColorBorde);
	}

	/**
	 * Dibuja una lista de círculos
	 * @param {Circulo[]} CirculoLst - Lista de círculos
	 */
	CirculoLista(CirculoLst){
		for(let cont = 0; cont < CirculoLst.length; cont++)
			this.CirculoObj(CirculoLst[cont]);
	}

	/**
	 * Dibuja un círculo dado el objeto círculo
	 * @param {Circulo} obj - Objeto círculo
	 */
	CirculoObj(obj){
		switch(obj.Tipo){
			case 1: this.Circulo(obj.posX, obj.posY, obj.Radio, obj.GrosorBorde, obj.ColorBorde); break;
			case 2: this.CirculoRelleno(obj.posX, obj.posY, obj.Radio, obj.ColorRelleno); break;
			case 3: this.CirculoRellenoBorde(obj.posX, obj.posY, obj.Radio, obj.ColorRelleno, obj.GrosorBorde, obj.ColorBorde); break;		
		}
	}

	/**
	 * Dibuja una cadena de texto con un color de borde
	 * @param {number} posX - Posición en X del texto
	 * @param {number} posY - Posición en Y del texto
	 * @param {string} Texto - Texto a mostrar en pantalla
	 * @param {string} Color - Color expresado en hexadecimal para el texto
	 * @param {string} Fuente - Características de la fuente a usar
	 */
	DibujarCadenas(posX, posY, Texto, Color, Fuente){
		this.Contexto.beginPath();
		this.Contexto.font = Fuente; //Tipo, tamaño, fuente
		this.Contexto.strokeStyle = Color;
		this.Contexto.strokeText(Texto, posX, posY); //Inferior
		this.Contexto.closePath();
	}

	/**
	 * Dibuja una cadena de texto con color de relleno
	 * @param {number} posX - Posición en X del texto
	 * @param {number} posY - Posición en Y del texto
	 * @param {string} Texto - Texto a mostrar en pantalla
	 * @param {string} Color - Color expresado en hexadecimal para el relleno del texto
	 * @param {string} Fuente - Características de la fuente a usar
	 */
	DibujarCadenasRelleno(posX, posY, Texto, Color, Fuente){
		this.Contexto.beginPath();
		this.Contexto.font = Fuente; //Tipo, tamaño, fuente
		this.Contexto.fillStyle = Color;
		this.Contexto.fillText(Texto, posX, posY); //Superior
		this.Contexto.closePath();
	}
	
	/**
	 * Convierte los números RGB (Red, Green, Blue) en su equivalente hexadecimal de color
	 * @param {number} Rojo - Valor de 0 a 254 de rojo
	 * @param {number} Verde - Valor de 0 a 254 de verde
	 * @param {number} Azul - Valor de 0 a 254 de azul
	 * @return {string} Color en hexadecimal
	 */
	ColorRGB(Rojo,Verde, Azul){
		return "#" + this.Hexadecimal(Rojo) + this.Hexadecimal(Verde) + this.Hexadecimal(Azul);
	}

	/**
	 * Convierte un número en hexadecimal
	 * @param {number} Numero - Número a convertir
	 * @returns {string} - Número en hexadecimal
	 */
	Hexadecimal(Numero){
		if (isNaN(Numero)) return "00";
		return "0123456789ABCDEF".charAt((Numero-Numero%16)/16)+"0123456789ABCDEF".charAt(Numero%16);
	}

	/**
	 * Retorna un color al azar en formato hexadecimal
	 * @returns {string} - Color en formato hexadecimal
	 */
	ColorAzar(){
		let Rojo = Math.round(Math.random() * 255);
		let Verde = Math.round(Math.random() * 255);
		let Azul = Math.round(Math.random() * 255);
		return this.ColorRGB(Rojo, Verde, Azul);
	}
}


/** Clase para mantener un conjunto de puntos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 * */
class Punto {
	/**
	 * Constructor
	 * @param {number} posX - Valor X de la coordenada
	 * @param {number} posY - Valor Y de la coordenada
	 */
	constructor(posX, posY){
		this.posX = posX;
		this.posY = posY;
	}
}

/** Clase para mantener un conjunto de líneas
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 * */
class Linea {
	/**
	 * Constructor
	 * @param {number} posXini - Valor X de la coordenada de inicio
	 * @param {number} posYini - Valor Y de la coordenada de inicio
	 * @param {number} posXfin - Valor X de la coordenada final
	 * @param {number} posYfin - Valor Y de la coordenada final
	 * @param {number} Grosor - Grosor de la línea
	 * @param {string} Color - Color expresado en hexadecimal de la línea
	 */
	constructor(posXini, posYini, posXfin, posYfin, Grosor, Color){
		this.posXini = posXini;
		this.posYini = posYini;
		this.posXfin = posXfin;
		this.posYfin = posYfin;
		this.Grosor = Grosor;
		this.Color = Color;
	}

	/**
	 * Trasladar una línea
	 * @param {number} mueveX - Traslado en el eje X
	 * @param {number} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posXini += mueveX;
		this.posYini += mueveY;
		this.posXfin += mueveX;
		this.posYfin += mueveY;		
	}

	/**
	 * Girar la línea calculando su centroide
	 * @param {number} angulo - Ángulo en grados de giro
	 */
	Girar(angulo){
		let anguloR = angulo * Math.PI / 180;
		
		//Giro de las dos coordenadas
		let posXinig = Math.round(this.posXini * Math.cos(anguloR) - this.posYini * Math.sin(anguloR));
		let posYinig = Math.round(this.posXini * Math.sin(anguloR) + this.posYini * Math.cos(anguloR));
		let posXfing = Math.round(this.posXfin * Math.cos(anguloR) - this.posYfin * Math.sin(anguloR));
		let posYfing = Math.round(this.posXfin * Math.sin(anguloR) + this.posYfin * Math.cos(anguloR));
		
		//Giro del centroide
		let centroX = (this.posXini + this.posXfin) / 2;
		let centroY = (this.posYini + this.posYfin) / 2;
		let centroXg = Math.round(centroX * Math.cos(anguloR) - centroY * Math.sin(anguloR));
		let centroYg = Math.round(centroX * Math.sin(anguloR) + centroY * Math.cos(anguloR));
		
		//¿Cuánto se desplazó el centroide?
        let desplazaX = centroXg - centroX;
        let desplazaY = centroYg - centroY;

		//Retira el desplazamiento
		this.posXini = posXinig - desplazaX;
		this.posYini = posYinig - desplazaY;
		this.posXfin = posXfing - desplazaX;
		this.posYfin = posYfing - desplazaY;	
	}
}

/** Clase para mantener un conjunto de triángulos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 * */
class Triangulo {
	/**
	 * Constructor
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {number} Tipo - Tipo triángulo: 1. Sólo perímetro, 2. Relleno, 3. Perímetro de un color y relleno de otro color
	 * @param {number} GrosorBorde - Grosor del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {string} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX1, posY1, posX2, posY2, posX3, posY3, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX1 = posX1;
		this.posY1 = posY1;
		this.posX2 = posX2;
		this.posY2 = posY2;
		this.posX3 = posX3;
		this.posY3 = posY3;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un triángulo
	 * @param {number} mueveX - Traslado en el eje X
	 * @param {number} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX1 += mueveX;
		this.posY1 += mueveY;
		this.posX2 += mueveX;
		this.posY2 += mueveY;
		this.posX3 += mueveX;
		this.posY3 += mueveY;		
	}

	/**
	 * Girar el triángulo calculando su centroide
	 * @param {number} angulo - Ángulo en grados de giro
	 */
	Girar(angulo){
		let anguloR = angulo * Math.PI / 180;
		
		//Giro de las tres coordenadas
		let posX1g = Math.round(this.posX1 * Math.cos(anguloR) - this.posY1 * Math.sin(anguloR));
		let posY1g = Math.round(this.posX1 * Math.sin(anguloR) + this.posY1 * Math.cos(anguloR));
		let posX2g = Math.round(this.posX2 * Math.cos(anguloR) - this.posY2 * Math.sin(anguloR));
		let posY2g = Math.round(this.posX2 * Math.sin(anguloR) + this.posY2 * Math.cos(anguloR));
		let posX3g = Math.round(this.posX3 * Math.cos(anguloR) - this.posY3 * Math.sin(anguloR));
		let posY3g = Math.round(this.posX3 * Math.sin(anguloR) + this.posY3 * Math.cos(anguloR));
		
		//Giro del centroide
		let centroX = (this.posX1 + this.posX2 + this.posX3) / 3;
		let centroY = (this.posY1 + this.posY2 + this.posY3) / 3;
		let centroXg = Math.round(centroX * Math.cos(anguloR) - centroY * Math.sin(anguloR));
		let centroYg = Math.round(centroX * Math.sin(anguloR) + centroY * Math.cos(anguloR));
		
		//¿Cuánto se desplazó el centroide?
        let desplazaX = centroXg - centroX;
        let desplazaY = centroYg - centroY;

		//Retira el desplazamiento
		this.posX1 = posX1g - desplazaX;
		this.posY1 = posY1g - desplazaY;
		this.posX2 = posX2g - desplazaX;
		this.posY2 = posY2g - desplazaY;
		this.posX3 = posX3g - desplazaX;
		this.posY3 = posY3g - desplazaY;		
	}	
}

/** Clase para mantener un conjunto de rectángulos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 * */
class Rectangulo {
	/**
	 * Constructor
	 * @param {number} posX - Valor X de la coordenada superior izquierda
	 * @param {number} posY - Valor Y de la coordenada superior izquierda
	 * @param {number} Ancho - Ancho del rectángulo
	 * @param {number} Alto - Alto del rectángulo
	 * @param {number} Tipo - Tipo rectángulo: 1. Sólo perímetro, 2. Relleno, 3. Perímetro de un color y relleno de otro color
	 * @param {number} GrosorBorde - Grosor línea del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {string} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX, posY, Ancho, Alto, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX = posX;
		this.posY = posY;
		this.Ancho = Ancho;
		this.Alto = Alto;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un rectángulo
	 * @param {number} mueveX - Traslado en el eje X
	 * @param {number} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX += mueveX;
		this.posY += mueveY;
	}	
}

/** Clase para mantener un conjunto de polígonos de 4 lados
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 * */
class Poligono4Lados {
	/**
	 * Constructor
	 * @param {number} posX1 - Valor X de la primera coordenada
	 * @param {number} posY1 - Valor Y de la primera coordenada
	 * @param {number} posX2 - Valor X de la segunda coordenada
	 * @param {number} posY2 - Valor Y de la segunda coordenada
	 * @param {number} posX3 - Valor X de la tercera coordenada
	 * @param {number} posY3 - Valor Y de la tercera coordenada
	 * @param {number} posX4 - Valor X de la cuarta coordenada
	 * @param {number} posY4 - Valor Y de la cuarta coordenada
	 * @param {number} Tipo - Tipo polígono de 4 lados: 1. Sólo perímetro, 2. Relleno, 3. Perímetro de un color y relleno de otro color
	 * @param {number} GrosorBorde  - Grosor línea del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {string} ColorRelleno  - Color expresado en hexadecimal del relleno
	 */
	constructor(posX1, posY1, posX2, posY2, posX3, posY3, posX4, posY4, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX1 = posX1;
		this.posY1 = posY1;
		this.posX2 = posX2;
		this.posY2 = posY2;
		this.posX3 = posX3;
		this.posY3 = posY3;
		this.posX4 = posX4;
		this.posY4 = posY4;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un polígono de 4 lados
	 * @param {number} mueveX - Traslado en el eje X
	 * @param {number} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX1 += mueveX;
		this.posY1 += mueveY;
		this.posX2 += mueveX;
		this.posY2 += mueveY;
		this.posX3 += mueveX;
		this.posY3 += mueveY;
		this.posX4 += mueveX;
		this.posY4 += mueveY;		
	}

	/**
	 * Girar el polígono de 4 lados calculando su centroide
	 * @param {number} angulo - Ángulo en grados de giro
	 */
	Girar(angulo){
		let anguloR = angulo * Math.PI / 180;
		
		//Giro de las cuatro coordenadas
		let posX1g = Math.round(this.posX1 * Math.cos(anguloR) - this.posY1 * Math.sin(anguloR));
		let posY1g = Math.round(this.posX1 * Math.sin(anguloR) + this.posY1 * Math.cos(anguloR));
		let posX2g = Math.round(this.posX2 * Math.cos(anguloR) - this.posY2 * Math.sin(anguloR));
		let posY2g = Math.round(this.posX2 * Math.sin(anguloR) + this.posY2 * Math.cos(anguloR));
		let posX3g = Math.round(this.posX3 * Math.cos(anguloR) - this.posY3 * Math.sin(anguloR));
		let posY3g = Math.round(this.posX3 * Math.sin(anguloR) + this.posY3 * Math.cos(anguloR));
		let posX4g = Math.round(this.posX4 * Math.cos(anguloR) - this.posY4 * Math.sin(anguloR));
		let posY4g = Math.round(this.posX4 * Math.sin(anguloR) + this.posY4 * Math.cos(anguloR));
		
		//Giro del centroide
		let centroX = (this.posX1 + this.posX2 + this.posX3 + this.posX4) / 4;
		let centroY = (this.posY1 + this.posY2 + this.posY3 + this.posY4) / 4;
		let centroXg = Math.round(centroX * Math.cos(anguloR) - centroY * Math.sin(anguloR));
		let centroYg = Math.round(centroX * Math.sin(anguloR) + centroY * Math.cos(anguloR));
		
		//¿Cuánto se desplazó el centroide?
        let desplazaX = centroXg - centroX;
        let desplazaY = centroYg - centroY;

		//Retira el desplazamiento
		this.posX1 = posX1g - desplazaX;
		this.posY1 = posY1g - desplazaY;
		this.posX2 = posX2g - desplazaX;
		this.posY2 = posY2g - desplazaY;
		this.posX3 = posX3g - desplazaX;
		this.posY3 = posY3g - desplazaY;
		this.posX4 = posX4g - desplazaX;
		this.posY4 = posY4g - desplazaY;		
	}	
}

/** Clase para mantener un conjunto de elipses
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 * */
class Elipse {
	/**
	 * Constructor
	 * @param {number} posX - Posición X de la coordenada del centro de la elipse
	 * @param {number} posY - Posición Y de la coordenada del centro de la elipse
	 * @param {number} RadioX - Longitud del radio en el eje X
	 * @param {number} RadioY - Longitud del radio en el eje Y
	 * @param {number} RotaFigura - Giro de la elipse
	 * @param {number} angIni - Ángulo inicial de dibujado de la elipse
	 * @param {number} angFin - Ángulo final de dibujado de la elipse
	 * @param {boolean} ContraReloj - Si el dibujado es contrareloj es true
	 * @param {number} Tipo - Tipo elipse: 1. Sólo el borde, 2. Relleno, 3. Borde de un color y relleno de otro color
	 * @param {number} GrosorBorde - Grosor del borde
	 * @param {string} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {string} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX, posY, RadioX, RadioY, RotaFigura, angIni, angFin, ContraReloj, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX = posX;
		this.posY = posY;
		this.RadioX = RadioX;
		this.RadioY = RadioY;
		this.RotaFigura = RotaFigura;
		this.angIni = angIni;
		this.angFin = angFin;
		this.Reloj = ContraReloj;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar una elipse
	 * @param {number} mueveX - Traslado en el eje X
	 * @param {number} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX += mueveX;
		this.posY += mueveY;
	}	
}

/** Clase para mantener un conjunto de círculos
 *  @Author Rafael Alberto Moreno Parra
 *  @Version 1.0 (05 de enero de 2024)
 * */
class Circulo {
	/**
	 * Constructor
	 * @param {number} posX - Posición X de la coordenada del centro del círculo
	 * @param {number} posY - Posición Y de la coordenada del centro del círculo
	 * @param {number} Radio - Radio del círculo
	 * @param {number} Tipo - Tipo de círculo: 1. Sólo color en el perímetro, 2. Relleno, 3. Relleno de un color y perímetro de otro color
	 * @param {number} GrosorBorde - Grosor del perímetro
	 * @param {string} ColorBorde - Color expresado en hexadecimal del borde
	 * @param {string} ColorRelleno - Color expresado en hexadecimal del relleno
	 */
	constructor(posX, posY, Radio, Tipo, GrosorBorde, ColorBorde, ColorRelleno){
		this.posX = posX;
		this.posY = posY;
		this.Radio = Radio;
		this.Tipo = Tipo; //1. Solo borde, 2. Sólo relleno, 3. Borde y relleno
		this.GrosorBorde = GrosorBorde;
		this.ColorBorde = ColorBorde;
		this.ColorRelleno = ColorRelleno;
	}

	/**
	 * Trasladar un círculo
	 * @param {number} mueveX - Traslado en el eje X
	 * @param {number} mueveY - Traslado en el eje Y
	 */
	Trasladar(mueveX, mueveY){
		this.posX += mueveX;
		this.posY += mueveY;
	}	
}