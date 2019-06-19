---
layout: page
title: C#
permalink: /csharp/
---
```CSharp
namespace JBLWakeUpNew
{
    public partial class FormJBLWakeUp : Form
    {
        public FormJBLWakeUp()
        {
            InitializeComponent();
            
            Location = new Point(MousePosition.X - this.Width / 2, Screen.PrimaryScreen.WorkingArea.Bottom - this.Height);
            
        }

        private void buttonPlaySound_Click(object sender, EventArgs e)
        {
            CoreAudioDevice audioDevice = new CoreAudioController().DefaultPlaybackDevice;

            var oldvolume = audioDevice.Volume;            
            audioDevice.Volume = 100;

            SystemSounds.Exclamation.Play();
            Thread.Sleep(1000);
            audioDevice.Volume = oldvolume;

        }
    }
}
