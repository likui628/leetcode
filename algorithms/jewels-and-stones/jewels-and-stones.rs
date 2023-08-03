impl Solution {
    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        stones.chars().fold(
            0,
            |acc, cur| if jewels.contains(cur) { acc + 1 } else { acc },
        )
    }
}
