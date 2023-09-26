from PIL import Image
import os

folder=os.listdir('C:/Users/DELL/Desktop/photos');
i=0;
"""while i<len(folder):
    img=Image.open('C:/Users/DELL/Desktop/photos/{}'.format(folder[i]));
    img.save('C:/Users/DELL/Desktop/armscon/{}'.format(folder[i]),format='JPEG', quality=5);
    img.close()
    print(folder[i]+" done!");
    i=i+1;"""

while i<len(folder):
    img_size=os.path.getsize('C:/Users/DELL/Desktop/armscon/{}'.format(folder[i]));
    x=img_size;
    y="";
    z=30*1024;
    y=x/z;
    img=Image.open('C:/Users/DELL/Desktop/photos/{}'.format(folder[i]));
    img.save('C:/Users/DELL/Desktop/armscon/{}'.format(folder[i]),format='JPEG', quality=5);
    i=i+1;
