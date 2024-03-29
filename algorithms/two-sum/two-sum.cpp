class Solution
{
public:
    // solution 1
    vector<int> twoSum(vector<int> &nums, int target)
    {
        for (int i = 0; i < nums.size(); i++)
        {
            for (int j = i + 1; j < nums.size(); j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    return {i, j};
                }
            }
        }
        return {};
    }

    // solution 2
    vector<int> twoSum(vector<int> &nums, int target)
    {
        unordered_map<int, int> map = {};

        for (int i = 0; i < nums.size(); ++i)
        {
            map[nums[i]] = i;
        }

        for (int i = 0; i < nums.size(); i++)
        {
            int complement = target - nums[i];
            if (map.find(complement) != map.end() && map[complement] != i)
            {
                return {map[complement], i};
            }
        }
        return {};
    }
};