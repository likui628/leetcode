impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut a = m as usize;
        let mut b = n as usize;
        let mut c = (m + n) as usize;

        while a > 0 && b > 0 {
            if nums1[a - 1] < nums2[b - 1] {
                nums1[c - 1] = nums2[b - 1];
                c -= 1;
                b -= 1;
            } else {
                nums1[c - 1] = nums1[a - 1];
                c -= 1;
                a -= 1;
            }
        }
        while b > 0 {
            nums1[c - 1] = nums2[b - 1];
            c -= 1;
            b -= 1;
        }
    }
}
