impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut insertIndex = 1;
        for i in 1..nums.len() {
            if nums[i] != nums[i - 1] {
                nums[insertIndex] = nums[i];
                insertIndex += 1;
            }
        }
        insertIndex as i32
    }
}
