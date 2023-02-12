impl Solution {
    pub fn sort_the_students(score: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        let mut score=score;
        score.sort_by(|a, b| b[k as usize].cmp(&a[k as usize]));
        score
    }
}