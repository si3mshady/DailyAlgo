#given an integer array, output all the unique pairs that up up to a specific value

sample = [32,44,6,9]
   
def pair_sum(*args,value):
    vals = [(value - x,x) for x in args[0]]  
    
            
 
    print(vals)


pair_sum(sample,value=4)