impl Solution {
    pub fn diagonal_sum(mat: Vec<Vec<i32>>) -> i32 {
        let n = mat.len();
        let mut result: i32 = 0;
        for i in 0..n {
            result += mat[i][i];
            if (n - i - 1 == i) {
                continue;
            }
            result += mat[n - i - 1][i];
        }
        result
    }
}
