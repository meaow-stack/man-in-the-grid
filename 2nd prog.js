class Grid {
    constructor() {
        this.memo = {};
    }

    traveller1(m, n,this) {
        const key = m + "," + n;
        if (this.memo[key]) return this.memo[key];
        if (m === 0 || n === 0) return 1;
        if (m === 1 || n === 1) return 1;
        if (m === 1 || n === 0) return 1;
        if (m === 0 || n === 1) return 1;
        this.memo[key] = this.traveller1(m - 1, n) + this.traveller1(m, n - 1);
        return this.memo[key];
    }
}

let trav = new Grid();
console.log("Number of ways to reach the bottom right corner from top left corner in a 2*5 grid is:", trav.traveller1(2, 5));
console.log("Number of ways to reach the bottom right corner from top left corner in a 4*5 grid is:", trav.traveller1(4, 5));
console.log("Number of ways to reach the bottom right corner from top left corner in a 5*7 grid is:", trav.traveller1(5, 7));
console.log("Number of ways to reach the bottom right corner from top left corner in a 18*18 grid is:", trav.traveller1(18, 18));
