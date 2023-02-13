use std::collections::HashMap;

impl Solution {
    pub fn contains_nearby_duplicate(nums: Vec<i32>, k: i32) -> bool {
        nums.into_iter()
            .zip(0..)
            .scan(HashMap::<i32, i32>::new(), |map, (number, i)| {
                println!("{i:?} {number:?}");
                match map.insert(number, i) {
                    Some(j) => Some(i - j <= k),
                    None => Some(false),
                }
            })
            .any(|ok| ok)
    }
}