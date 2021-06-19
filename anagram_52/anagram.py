def anagram(s1,s2):
    s1 = s1.replace(' ','').lower()
    s2 = s2.replace(' ', '').lower()
    if sorted(s1) == sorted(s2):
        print('anagram')
    else:
        print('not an anagram')


anagram('boy 2151waew','2151waew boy')