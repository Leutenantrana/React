class Solution {
    public String largeOddNum(String s) {
        //your code goes here
        int n = Integer.valueOf(s)

        if(n % 2 !=0) return s;

        while(n>0){
            n /=10;
            if(n % 2 !=0) return String.valueOf(n)
            int m = n;
            while(m>0){
                m/=10;
                if(m % 2 !=0) return String.valueOf(m);
            }
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String num = "504";
        String result = solution.largeOddNum(num);
        System.out.println("Largest odd number: " + result);
    }
}
