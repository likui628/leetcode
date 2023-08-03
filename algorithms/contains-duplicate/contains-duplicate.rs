use std::collections::HashSet;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut set = HashSet::new();
        for i in nums.into_iter() {
            if set.contains(&i) {
                return true;
            }
            set.insert(i);
        }
        false
    }
}
