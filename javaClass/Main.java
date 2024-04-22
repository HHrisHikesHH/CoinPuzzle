import java.util.Objects;
import java.util.Scanner;

public class Main {
    static int coin = 30;
    static String turn = "";
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        String now = "";
        String then = "";

        System.out.println("Enter the user name");
        String name = sc.next();

        System.out.println("Do you want first turn to choose : y/n");
        char start = sc.next().charAt(0);

        if(start == 'Y' || start == 'y'){
            now = name;
            then = "CPU";
        }else{
            now = "CPU";
            then = name;
        }

        while(coin > 0){
            drawCoin(now);
            if(coin == 1) break;
            drawCoin(then);
            if(coin == 1) break;
        }
        System.out.println("Total coin remaining : " + coin);
        System.out.printf("%s had to drawn last coin \n", turn.equals(name) ? "CPU" : name);
        System.out.printf("Winner is : %s" , turn);
    }

    private static void drawCoin(String user) {
        turn = user;
        if(!user.equals("CPU")){
            drawFromUser();
        }else {
            drawFromCPU();
        }
    }

    private static void drawFromCPU() {
        int draw = (coin % 7) - 1;
        if(coin > 7) {
            if(draw <= 0){
                draw = ((int)(Math.random() * 10) % 6) + 1;
            }
            System.out.println("CPU drawn : " + draw);
            coin -= draw;
        }
        else {
            if(coin == 1)
            {
                System.out.println("CPU drawn : " +  1);
                coin = 0;
            }
            else {
                System.out.println("CPU drawn : " + (coin - 1));
                coin = 1;
            }
        }
    }

    private static void drawFromUser() {
        System.out.println("Total coin remaining : " + coin);
        int draw = 0;
        while (!(draw < 7 && draw > 0)){
            System.out.println("Draw coin between 1 - 6");
            draw = sc.nextInt();
        }
        coin -= draw;
    }
}
