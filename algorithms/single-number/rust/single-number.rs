impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        use std::collections::HashMap;
        let mut map = HashMap::<i32, i32>::new();

        for i in nums.into_iter() {
            if map.contains_key(&i) {
                *map.get_mut(&i).unwrap() += 1;
            } else {
                map.insert(i, 1);
            }
        }

        *map.iter()
            .find_map(|(key, &val)| if val == 1 { Some(key) } else { None })
            .unwrap()
    }
}
