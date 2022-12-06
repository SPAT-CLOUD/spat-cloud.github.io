#MySelf.py
x="WvrShAtEinDlOf"
g=e=r=p= ""
h = list(x)
y = [0,4,12,8,3,0,12,2,3,6,13,7,11,11,12,0]
n = [4,5,2,3,4,5,1,5,2,10,4,5,9]
Q2 = [0,4,12,8,3,3,6,2,7,7,3,7,10]
#WhOiSStrEESED {Space index (2,4)}
Q3 =[0,4,12,0,5,9,6,6,12,10,8,7]
for k in range(0,len(y)):
    if(k==2 or k==4 or k==9):
        g += h[y[k]] + " "
    else:
        g += h[y[k]]
for l in range(0,len(n)):
    if(l==5):
        e+=h[n[l]] + " "
    else:
        e+=h[n[l]]
for j in range(0,len(Q3)):
    if(j==2 or j==6 or j==8):
        r+=h[Q3[j]] + " "
    else:
        r+=h[Q3[j]]
for u in range(0,len(Q2)):
    if(u==2 or u==4):
        p+=h[Q2[u]] + " "
    else:
        p+=h[Q2[u]]
        
print("1)" + g + "?" + "\n" + "Ans:" + e + "\n" + "2)" + p + "?" + "\n" + "Ans:" + e + "\n" + "3)" + r + "?" + "\n" "Ans:" + e)
