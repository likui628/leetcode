use std::collections::HashMap;

impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut map = HashMap::new();
        for i in &nums {
            if let Some(e) = map.get_mut(&i) {
                *e += 1;
            } else {
                map.insert(i, 1);
            }
        }

        let m = nums.len() / 2;

        *map.iter()
            .find_map(|(&key, &value)| if (value > m) { Some(key) } else { None })
            .unwrap()
    }
}
