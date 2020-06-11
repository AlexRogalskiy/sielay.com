---
title: 'Chore łapanie błędów w C# i komponencie webbrowser'
createdDate: '2007-11-17'
date: '2007-11-17'
author: sielay
tags: [recovered, csharp, error, javascript, webbrowser]
draft: false
---

Podczas pracy nad prostą aplikacją w C# natrafiłem na znaczny problem z chwytaniem wyjątków w JavaScript. Każdy najmniejszy błąd w JS powodował wyskakiwanie brzydkiego okna dialogowego. Szukałem jakiegoś zdarzenia, które mogłem obsłużyć, ale nic nie mogłem odnaleźć. Zapytałem Google - nic. Po długim czasie odnalazłem rozwiązanie:

```csharp
webBrowser1.Document.Window.Error
        += new HtmlElementErrorEventHandler(logError);
private void logError(object sender, HtmlElementErrorEventArgs e)
        {
            // blah blah blah
            e.Handled = true;
        }
```

Wydaje mi się, że niektórym z was może się to przydać.
