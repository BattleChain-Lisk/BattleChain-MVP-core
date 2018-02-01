/**
 * User for persistence layer
 */

 class User{

    constructor(address, lastBalance){
        this.address = address;
        this.balance = lastBalance;
    }

    
    setBalance(lastBalance){
        this.balance = lastBalance;
    }

    getBalance(){
        return this.balance;
    }

 }

