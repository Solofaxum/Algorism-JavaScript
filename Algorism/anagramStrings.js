

/**
 *
 * @author Solomon Gebreslasie
 */
//Write a function to check if two strings are anagrams or not ?

function anagram(str1, str2) {
    str1 = str1.split('').sort().join();
    str2 = str2.split('').sort().join();
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}
console.log(anagram('cat', 'act'));
