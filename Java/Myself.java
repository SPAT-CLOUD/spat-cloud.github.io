import java.util.*;
import java.io.*;
class Myself
{
public static String c(char c)
{//String convert 
return String.valueOf(c);
}
public static void main(String args[])
{
String x,z="",u="",h="",R="";
int q2[] = {0,4,12,8,3,3,6,2,7,7,3,7,10};
int Q3[] ={0,4,12,0,5,9,6,6,12,10,8,7};
int aIn[]= {0,4,12,8,3,0,12,2,3,6,13,7,11,11,12,0};
int n[] = {4,5,2,3,4,5,1,5,2,10,4,5,9};
x = "WvrShAtEinDlOf";
for(int i=0;i<aIn.length;i++)
{
    if(i==2 || i == 4 || i==9){
        u +=c(x.charAt(aIn[i])) + " ";
    }
    else
{
u +=c(x.charAt(aIn[i]));}
}
for(int j=0;j<n.length;j++)
{
    if(j==5){
        z +=c(x.charAt(n[j])) + " ";
    }
    else
{
z +=c(x.charAt(n[j]));}
}
for(int k=0;k<q2.length;k++)
{
if(k==2||k==4)
h +=c(x.charAt(q2[k])) + " ";
else h +=c(x.charAt(q2[k]));
}
for(int lo=0;lo<Q3.length;lo++){
if(lo==2||lo==6||lo==8)
R += c(x.charAt(Q3[lo])) + " ";
else R += c(x.charAt(Q3[lo]));
}
System.out.println("-----------------" + "\n" + "1)" + u + "?" + "\n" + "Answer:" + z.toUpperCase() + "\n" + "----------------" + "\n" + "2)" + h + "?" + "\n" + "Answer:" + z.toUpperCase() + "\n" + "----------------" + "\n" + "3)" + R + "?" + "\n" + "Answer:" + z.toUpperCase());
}
}
