package Exercicios;
import java.util.Scanner;

public class Main {
	
public static void main(String[] args) {
//	int idade;
//	idade = 18; // variavel tipo int 
//	String nome = " Rafael";
//		
//	System.out.println("Primeiro Java ... ! ");
//	System.out.println(nome+" tem "+idade);
//	
//	if (idade >=18) {  
//		// >, < , >=, <=, ==, !=  
//		// &&, ||, !
//		System.out.println("maior de idade ... ! ");
//	}
//	else
//	{ System.out.println("Menor der idade. ! ");}
//}	
//	for(int i = 0; i <=10; i++) {
//   System.out.println("9 x "+ i + "="+(8*i)); 
//  }
//	
//	int i=0;
//	
//	while(i<=10);{
//		i=i++;
//		System.out.println("9 x "+ i + "="+(9*i));
			
//	}
	int op, num1, num2, resultado;
	
	Scanner sc = new Scanner(System.in);
					
		do {
		System.out.println("Escolha uma opcao : ");
		
		System.out.println("1 - Somar  ");
		System.out.println("2 - Subtrair ");
		System.out.println("3 - Multiplicar");
		System.out.println("4 - Dividir ");
		System.out.println("5 - Sair  ");
		
		op = sc.nextInt();
		
		switch(op) {
	case 1: somar();
		break;
		
	case 2: subtrair();
		break;
	
	case 3: multiplicar();
	break;
	
	case 4: dividir();
		break;
		
	case 5: sair();
		break;
		}
		
}while(op !=5);
	
	
}

public static void somar() {
	float num1, num2, resultado;
	Scanner sc = new Scanner(System.in);
	System.out.println(" Digite um numero");
	num1 = sc.nextInt();
	System.out.println(" Digite um numero");
	num2 = sc.nextInt();
	System.out.println("O resultado da operação  é ; "+(num1+num2) );
}


public static void subtrair() {
	float num1, num2, resultado;
	Scanner sc = new Scanner(System.in);
	System.out.println(" Digite um numero");
	num1 = sc.nextInt();
	System.out.println(" Digite um numero");
	num2 = sc.nextInt();
	System.out.println("O resultado da operação  é ; "+(num1-num2) );
}

public static void multiplicar() {
	float num1, num2, resultado;
	Scanner sc = new Scanner(System.in);
	System.out.println(" Digite um numero");
	num1 = sc.nextInt();
	System.out.println(" Digite um numero");
	num2 = sc.nextInt();
	System.out.println("O resultado da operação  é ; "+(num1*num2) );
}

public static void dividir() {
	float num1, num2, resultado;
	Scanner sc = new Scanner(System.in);
	System.out.println(" Digite um numero");
	num1 = sc.nextInt();
	System.out.println(" Digite um numero");
	num2 = sc.nextInt();
	System.out.println("O resultado da operação  é ; "+(num1/num2) );
}
public static void sair() {
	float num1, num2, resultado;
	Scanner sc = new Scanner(System.in);
	System.out.println(" Digite um numero");
	System.out.println(" Programa encerrado " );
}
}

