impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        let s = x.to_string();
        let reversed = s.chars().rev().collect::<String>();
        s.eq(&reversed)
    }
}
