import os
import json

input_folder="d:/react/armscon2/txt.txt";
file=open(input_folder,'r');
string_file=file.read().split(',');
new_string_file=string_file[1].split('/')
i=0;
main_arr=[];
main_main_Arr=[]
while i<len(string_file):
    new_string_file=string_file[i].split('/');
    main_arr.append(new_string_file[5]);
    dic= {
        "link":main_arr[i]
    }
    main_main_Arr.append(dic);
    i=i+1;

json_file=json.dumps(main_main_Arr);
json_k=open('d:/react/armscon2/wwe.json','w');
json_k.write(json_file)
