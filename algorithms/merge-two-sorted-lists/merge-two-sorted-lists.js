/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let tail = dummy
    while (list1 && list2) {
        const n1 = list1.val
        const n2 = list2.val

        if (n1 < n2) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    if (list1) {
        tail.next = list1
    }
    if (list2) {
        tail.next = list2
    }
    return dummy.next
};