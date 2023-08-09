impl Solution {
    pub fn subtract_product_and_sum(n: i32) -> i32 {
        let s = n.to_string();
        let nums = s.chars().map(|c| c.to_digit(10).unwrap() as i32);
        let add = nums.clone().fold(0, |acc, x| acc + x);
        let prod = nums.clone().fold(1, |acc, x| acc * x);
        
        prod - add
    }
}
