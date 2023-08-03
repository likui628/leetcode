impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        use std::collections::HashMap;
        let mut map: HashMap<i32, i32> = HashMap::new();
        for (i, n) in nums.iter().enumerate() {
            if map.contains_key(n) {
                return vec![map.get(n).unwrap().clone(), i as i32];
            }
            map.insert(target - n, i as i32);
        }

        Vec::new()
    }
}
