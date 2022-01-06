## 1. Two Sum

The easy solution is O(n^2) run-time complexity.
```
foreach(item1 in array) {
    foreach(item2 in array){
        if (item1 + item2 == target) {
            return result
        }
    }
}
```

**Follow-up**: Can you come up with an algorithm that is less than O(n2) time complexity?

