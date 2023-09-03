/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let tail = head;
    while (tail) {
        if (!tail.next) {
            break
        }
        [tail.val, tail.next.val] = [tail.next.val, tail.val]
        if (!tail.next.next) {
            break
        }
        tail = tail.next.next
    }
    return head
};