use std::collections::HashMap;

impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let pairs = indices
            .into_iter()
            .zip(s.chars())
            .collect::<HashMap<i32, char>>();

        (0..(s.len() as i32))
            .map(|i| pairs.get(&i).unwrap())
            .collect::<String>()
    }
}

//solution 2
impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let mut shuffled = vec![' '; s.len()];
        let s_chars = s.chars().collect::<Vec<char>>();

        for i in (0..s.len()) {
            shuffled[indices[i] as usize] = s_chars[i];
        }

        shuffled.iter().collect::<String>()
    }
}
