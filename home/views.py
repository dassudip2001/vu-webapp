from django.shortcuts import render, HttpResponse

# Create your views here.


def home(request):

    # return HttpResponse("this is homepage")
    # return render(request, 'steganalysis.html')
    return render(request, 'transformation.html')


# steganalysis
def steganalysis(request):
    return render(request, 'steganalysis.html')

def about(request):
    return render(request, 'about.html')    
