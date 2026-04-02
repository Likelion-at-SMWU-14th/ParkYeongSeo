from django.shortcuts import render, redirect
from .forms import SignUpForm

def Signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")
    else:
        form = SignUpForm()
    
    return render(request, 'signup.html', {'form': form})

# Create your views here.
