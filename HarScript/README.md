# HarScript

## 1. SUPPORTS CUSTOM ENCRYPTION ALGORITHM CALLED *LowCrypt* different versions 

"lh","lh3","rCrypt"(experiment)
-------



  ### CREATION DECLARATION:

 a. LINK THE SCRIPT IN HEAD SECTION.
 b. AFTER LINKING DECLARE AND CALL "run" METHOD.
   ``var m=new $_;
   m.run();
   //created successfully 
   // now All Prototype Functions and Cryptographic Functions are Available 
   ``
 
   
2. And Supports Custom Prototypes ,like Listed Below
    "lower".upper() // "LOWER"
    "UPPER".lower() // "upper"
    "test".ba() // dGVzdA==
    "dGVzdA==".ab() // test
    "Hi".binStr() // 0100100001101001
3. Cryptography Functions
#___________
    "Hi".rCrypt() // ﾵﾔ
    "Hi".lh() // e1c48243
    "Hi".lh3() // ·
   rCrypt : No Custom Reverse Function
   lh : Reverse Functional True 'hl'
   ex: "e1c48243".hl() // Hi
lh3 : No Reverse Function.

4. DOM FUNCTIONS
   4.1 . AFTER DECLARED RUN AS BELLOW (_var m_ above used as Object, use _m_ object to call)
   querySelectorAll:
        m.qsa('.classSelector'); // Returns Array of Nodes
   querySelector:
     m.qs('#IdUnq'); // points Single Element
   Alert box:
   m.HAlert("Hello"); // CUSTOM ALERT BY HARSCRIPT 
   
